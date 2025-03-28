"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DashboardNav } from "./dashboard-nav";

interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  suburb?: string;
  interests?: string[];
  dailyEnergyConsumption?: string;
}

const LeadsTable = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:3000/v1/Quote?page=${page}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        if (!data || !Array.isArray(data.quotes)) {
          throw new Error("Invalid API response format");
        }

        setLeads(data.quotes);
        setTotalPages(data.totalPages || 1);
        setTotalResults(data.totalResults || data.quotes.length);
      } catch (err) {
        console.error("Failed to fetch leads:", err);
        setError(err instanceof Error ? err.message : "Failed to load leads. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, [page]);

  return (
    <>
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Leads Table</h1>

      {error && <div className="p-4 text-center text-red-500">{error}</div>}

      {loading ? (
        <div className="p-4 text-center">Loading leads...</div>
      ) : (
        <>
          <table className="w-full border-collapse border border-gray-200 shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">ID</th>
                <th className="border p-3 text-left">Full Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Phone</th>
                <th className="border p-3 text-left">Address</th>
                <th className="border p-3 text-left">Suburb</th>
                <th className="border p-3 text-left">Interests</th>
                <th className="border p-3 text-left">Energy Consumption</th>
              </tr>
            </thead>
            <tbody>
              {leads.length > 0 ? (
                leads.map((lead) => (
                  <tr key={lead.id} className="border">
                    <td className="border p-3">{lead.id}</td>
                    <td className="border p-3">{lead.fullName}</td>
                    <td className="border p-3">{lead.email}</td>
                    <td className="border p-3">{lead.phone}</td>
                    <td className="border p-3">{lead.address}</td>
                    <td className="border p-3">{lead.suburb || "N/A"}</td>
                    <td className="border p-3">{lead.interests?.join(", ") || "N/A"}</td>
                    <td className="border p-3">{lead.dailyEnergyConsumption || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="p-4 text-center text-gray-500">
                    No leads found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-700">
              Page {page} of {totalPages} | Total Leads: {totalResults}
            </span>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1 || loading}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
                disabled={page >= totalPages || loading}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default LeadsTable;

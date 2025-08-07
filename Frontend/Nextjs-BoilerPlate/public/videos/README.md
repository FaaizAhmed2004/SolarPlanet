# Video Assets for The Energy Planet

## Hero Section Video

Place your solar panel hero video files in this directory with the following names:

### Required Files:
- `heroback.mp4` - **PRIMARY** hero background video (H.264 codec recommended)
- `solar-panels-hero.mp4` - Secondary fallback video format
- `solar-panels-hero.webm` - WebM format for better compression and browser support
- `solar-panels-hero.mov` - QuickTime format for Safari fallback (optional)

### Video Specifications:
- **Resolution**: 1920x1080 (Full HD) minimum, 4K preferred for high-DPI displays
- **Aspect Ratio**: 16:9
- **Duration**: 10-30 seconds (loops automatically)
- **File Size**: Keep under 10MB for optimal loading
- **Frame Rate**: 30fps or 60fps
- **Audio**: None (videos are muted by default)

### Recommended Content:
- Solar panels on Australian rooftops
- Time-lapse of solar installation
- Solar panels with blue sky background
- Clean, professional footage that represents renewable energy

### Optimization Tips:
1. **Compress videos** using tools like HandBrake or FFmpeg
2. **Use modern codecs** (H.265/HEVC for MP4, VP9 for WebM)
3. **Test on mobile devices** to ensure smooth playback
4. **Consider data usage** for mobile users

### Video Priority Order:
The system will attempt to load videos in this order:
1. `heroback.mp4` - Primary hero background video
2. `solar-panels-hero.mp4` - Secondary fallback
3. `solar-panels-hero.webm` - WebM fallback
4. `solar-panels-hero.mov` - QuickTime fallback
5. Additional backup videos
6. Static image fallback at `/images/10036.jpg`

### Fallback:
If video files are not available, the system will automatically fall back to the static image at `/images/10036.jpg`.

### Example FFmpeg Commands:

#### Convert to MP4 (H.264) - Primary Hero Video:
```bash
ffmpeg -i input.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart heroback.mp4
```

#### Convert to MP4 (H.264) - Fallback:
```bash
ffmpeg -i input.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart solar-panels-hero.mp4
```

#### Convert to WebM (VP9):
```bash
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus solar-panels-hero.webm
```

#### Optimize for web:
```bash
ffmpeg -i input.mov -vf scale=1920:1080 -c:v libx264 -crf 25 -preset slow -movflags +faststart solar-panels-hero.mp4
```

### Testing:
After adding video files, test the hero section on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Different network speeds
- With and without video files present

The video background enhances the user experience by showcasing solar energy in action while maintaining fast loading times and broad browser compatibility.
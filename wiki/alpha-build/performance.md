# Performance Optimization

*Demonstrating the engine's capability to handle complex, large-scale simulations*

## Overview

RuneEra's engine has been extensively optimized from the ground up to handle the demanding requirements of simulating multiple 
world areas simultaneously. Our performance architecture ensures smooth gameplay even during the most resource-intensive scenarios.

## Performance Metrics
During development we primarily focused on following metrics

::: tip Note
Testing system specifications: Ryzen 9 5950X, 32gb, RTX 4070Ti
:::

### Frame Rate Stability
- **Target**: 60 FPS minimum during standard gameplay
- **Stress Test**: 30+ FPS during maximum load scenarios
- **Consistency**: Minimal frame time variance across different activities

### Memory Management
- **Baseline Usage**: Large usage of memory due to texture sizes (~1.2 GB game with single colony)
- **Scaling**: Small and linear memory growth with additional explored areas (~ 150mb for each additional area)

### Timings
- **Startup**: Initializes game main menu takes around 2s
- **Game Load**:
    - From main menu: ~6 seconds (includes UI initialization)
    - From in-game menu: ~3 seconds
    - Single area load time
- **Multi-area Loading**: Scales linearly with area count (~27 seconds for 7 areas)
- **Save**: Heavily depends on the number of areas, on average < 100ms per area (10 areas ~1 second)
- **Area Transitions**: Instantaneous switching between explored areas

## Performance Demonstrations

### Multiple Settlement Operations
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/3xrAN9HHSi8?si=EqIpBs-MplT6s6GW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

Complex multi-area management showcasing the engine's ability to handle:
- Simultaneous faction activities across different biomes
- Inter-settlement trade and resource flow
- Population management at scale

**Key Metrics:**
- Stable frame rates with 5+ active settlements
- Minimal memory overhead during area switching
- Smooth transition between distant locations

### Large-Scale Resource Gathering

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/eH3dJMzCCNU?si=Vz0W7sKyAKCTOTLt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

Intensive resource extraction scenarios demonstrating:
- Coordinated mining and harvesting activities
- Environmental impact simulation

**Performance Highlights:**
- Hundreds of simultaneous gathering operations
- Dynamic resource node depletion calculations
- Real-time inventory management across distances
- Efficient pathfinding for large groups

### Large-Scale Battle Scenarios

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/Dy5mX9iCC7s?si=_tCRcwNB_c4TZrrd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/v7obBpv78GA?si=QyneB_xZTLM-wlqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---


Combat stress testing featuring:
- Massive faction warfare with hundreds of units
- Complex battlefield AI coordination
- Real-time damage and status effect calculations


::: tip Performance Monitoring
The game includes built-in performance monitoring tools to help identify potential issues during gameplay. Access these through the settings menu.
:::

::: info System Requirements
While extensively optimized, RuneEra performs best on modern multi-core CPUs.
:::
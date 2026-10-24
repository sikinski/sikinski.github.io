<template>
  <svg class="geometry" viewBox="0 0 800 1000" preserveAspectRatio="xMinYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="geometry-band" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#2A2E38" />
        <stop offset="1" stop-color="#15171C" />
      </linearGradient>
      <radialGradient id="geometry-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#FF75AD" stop-opacity="0.22" />
        <stop offset="1" stop-color="#FF75AD" stop-opacity="0" />
      </radialGradient>
      <filter id="geometry-blur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="7" />
      </filter>
    </defs>

    <circle cx="560" cy="300" r="340" fill="url(#geometry-glow)" />

    <g fill="none" stroke="#E5E7EB" stroke-opacity="0.1">
      <path d="M 0 1000 L 800 200" />
      <path d="M 140 1000 L 800 340" />
      <path d="M 180 0 L 800 620" />
    </g>

    <!-- Шеврон: полоса и её грани -->
    <path d="M 860 40 L 360 540 L 860 1040" fill="none" stroke="url(#geometry-band)" stroke-width="120" />
    <path d="M 860 -45 L 275 540 L 860 1125" fill="none" stroke="#E5E7EB" stroke-opacity="0.2" />
    <path d="M 860 125 L 445 540 L 860 955" fill="none" stroke="#FF75AD" stroke-opacity="0.4" />

    <g class="neon" stroke="#FF75AD" stroke-linecap="square">
      <g filter="url(#geometry-blur)" stroke-width="12" stroke-opacity="0.8">
        <path d="M 503 328 L 663 168" />
        <path d="M 613 862 L 693 942" />
        <path d="M 268 480 V 600" />
      </g>
      <path d="M 503 328 L 663 168" stroke-width="3" />
      <path d="M 613 862 L 693 942" stroke-width="2" />
      <path d="M 268 480 V 600" stroke-width="2" />
    </g>

    <g fill="#FF75AD">
      <rect x="466" y="176" width="10" height="10" />
      <rect x="690" y="560" width="8" height="8" />
      <rect x="596" y="700" width="10" height="10" transform="rotate(45 601 705)" />
    </g>

    <g fill="none" stroke="#FF75AD" stroke-opacity="0.6">
      <path d="M 471 0 V 160" stroke-dasharray="4 8" />
      <path d="M 520 0 V 260" stroke-dasharray="2 6" />
      <path d="M 700 600 L 640 660" stroke-dasharray="3 6" />
    </g>
  </svg>
</template>

<style lang="sass" scoped>
.neon
  animation: neon-pulse 4s ease-in-out infinite

@keyframes neon-pulse
  0%, 100%
    opacity: 1
  50%
    opacity: 0.7
</style>

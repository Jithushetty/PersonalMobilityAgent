document.getElementById("stats-row").innerHTML = `
<div class="stat">
    <div class="stat-label">Distance</div>
    <div class="stat-value">28 km</div>
    <div class="stat-sub">via Outer Ring Road</div>
</div>

<div class="stat">
    <div class="stat-label">Best travel time</div>
    <div class="stat-value">42 min</div>
    <div class="stat-sub">departing 05:30</div>
</div>

<div class="stat">
    <div class="stat-label">Peak delay</div>
    <div class="stat-value">+53 min</div>
    <div class="stat-sub">vs off-peak at 08:00</div>
</div>
`;

document.getElementById("best-time-box").innerHTML = `
<div class="best-box">
    <div>
        <div class="best-time">Leave by 08:03</div>
        <div class="best-desc">
            Arrive at 09:00 with 15 min buffer ·
            42 min journey ·
            Very early — near empty roads
        </div>
    </div>
</div>
`;

document.getElementById("slots-list").innerHTML = `

<div class="slot best">
  <div class="slot-time">05:30</div>
  <div class="slot-bar">
      <div class="slot-fill" style="width:30%;background:#1D9E75"></div>
  </div>
  <div class="slot-label">Very early — near empty roads · ~42 min</div>
  <span class="badge badge-low">Low traffic</span>
</div>

<div class="slot best">
  <div class="slot-time">06:00</div>
  <div class="slot-bar">
      <div class="slot-fill" style="width:35%;background:#1D9E75"></div>
  </div>
  <div class="slot-label">Early morning — light traffic · ~45 min</div>
  <span class="badge badge-low">Low traffic</span>
</div>

<div class="slot best">
  <div class="slot-time">06:30</div>
  <div class="slot-bar">
      <div class="slot-fill" style="width:40%;background:#1D9E75"></div>
  </div>
  <div class="slot-label">Light traffic building up · ~50 min</div>
  <span class="badge badge-low">Low traffic</span>
</div>

<div class="slot">
  <div class="slot-time">07:00</div>
  <div class="slot-bar">
      <div class="slot-fill" style="width:65%;background:#EF9F27"></div>
  </div>
  <div class="slot-label">Rush hour begins — Outer Ring Road congestion · ~65 min</div>
  <span class="badge badge-med">Moderate</span>
</div>

<div class="slot bad">
  <div class="slot-time">07:30</div>
  <div class="slot-bar">
      <div class="slot-fill" style="width:85%;background:#D85A30"></div>
  </div>
  <div class="slot-label">Peak rush — heavy on ORR & Marathahalli · ~85 min</div>
  <span class="badge badge-high">Heavy traffic</span>
</div>

<div class="slot bad">
  <div class="slot-time">08:00</div>
  <div class="slot-bar">
      <div class="slot-fill" style="width:95%;background:#D85A30"></div>
  </div>
  <div class="slot-label">Worst congestion of the day · ~95 min</div>
  <span class="badge badge-high">Heavy traffic</span>
</div>

<div class="slot bad">
  <div class="slot-time">08:30</div>
  <div class="slot-bar">
      <div class="slot-fill" style="width:90%;background:#D85A30"></div>
  </div>
  <div class="slot-label">Still heavy — avoid if possible · ~90 min</div>
  <span class="badge badge-high">Heavy traffic</span>
</div>

<div class="slot">
  <div class="slot-time">09:00</div>
  <div class="slot-bar">
      <div class="slot-fill" style="width:72%;background:#EF9F27"></div>
  </div>
  <div class="slot-label">Slightly easing but still busy · ~72 min</div>
  <span class="badge badge-med">Moderate</span>
</div>

<div class="slot">
  <div class="slot-time">09:30</div>
  <div class="slot-bar">
      <div class="slot-fill" style="width:68%;background:#EF9F27"></div>
  </div>
  <div class="slot-label">Moderately congested · ~68 min</div>
  <span class="badge badge-med">Moderate</span>
</div>

<div class="slot">
  <div class="slot-time">10:00</div>
  <div class="slot-bar">
      <div class="slot-fill" style="width:58%;background:#EF9F27"></div>
  </div>
  <div class="slot-label">Traffic easing post rush hour · ~58 min</div>
  <span class="badge badge-med">Moderate</span>
</div>

`;

document.getElementById("ai-text").innerHTML = `
Traffic is expected to increase sharply after 07:00 AM,
with peak congestion occurring between 07:30 AM and
08:30 AM along the Outer Ring Road and Marathahalli corridor.

To arrive by 09:00 AM with a comfortable 15-minute buffer,
leaving around 08:03 AM is recommended.

The fastest journey window is between 05:30 AM and
06:30 AM where traffic remains minimal and travel times
are approximately 42–50 minutes.
`;

document.getElementById("notif-list").innerHTML = `

<div class="notif-item">
  <div class="notif-dot dot-green"></div>
  <div class="notif-msg">Wake-up alert at 07:03 — gives you 1 hour to get ready</div>
</div>

<div class="notif-item">
  <div class="notif-dot dot-amber"></div>
  <div class="notif-msg">Traffic check at 06:00 — early morning ORR update before you leave</div>
</div>

<div class="notif-item">
  <div class="notif-dot dot-green"></div>
  <div class="notif-msg">Best departure window: 05:30 — low traffic, ~42 min journey</div>
</div>

<div class="notif-item">
  <div class="notif-dot dot-red"></div>
  <div class="notif-msg">Heavy traffic alert: 07:30–09:00 — Marathahalli bridge congestion expected</div>
</div>

<div class="notif-item">
  <div class="notif-dot dot-amber"></div>
  <div class="notif-msg">Arrive 15 min early for your interview — standard buffer</div>
</div>

`;

document.getElementById("ride-grid").innerHTML = `

<a href="#" class="ride-card">
  <div class="ride-name">🚕 Uber Go</div>
  <div class="ride-type">42 min ride · book 10 min before</div>
  <div class="ride-price">₹238–₹280</div>
</a>

<a href="#" class="ride-card">
  <div class="ride-name">🚖 Uber Premier</div>
  <div class="ride-type">47 min ride · comfort option</div>
  <div class="ride-price">₹308–₹392</div>
</a>

<a href="#" class="ride-card">
  <div class="ride-name">🚕 Ola Mini</div>
  <div class="ride-type">42 min ride · budget pick</div>
  <div class="ride-price">₹210–₹252</div>
</a>

<a href="#" class="ride-card">
  <div class="ride-name">🚖 Ola Prime</div>
  <div class="ride-type">47 min ride · sedan option</div>
  <div class="ride-price">₹280–₹364</div>
</a>

`;

function generateRecommendations() {
  const level = document.getElementById('level').value;
  const interestInput = document.getElementById('interest').value.trim();
  const interest = interestInput || 'your chosen topic';
  const list = document.getElementById('recommendationList');
  list.innerHTML = '';

  const brief = [
    {title: `Quick start: ${interest}`, desc: `Spend 1-2 hours building a tiny project that uses the core idea behind ${interest}.`},
    {title: `Foundations`, desc: `Read one concise guide or take a short course that explains the fundamentals.`},
    {title: `Practice`, desc: `Work on three small exercises or features; treat each as a tiny project.`},
    {title: `Apply`, desc: `Combine what you've learned into a small portfolio piece (a single page or notebook).`},
    {title: `Next steps`, desc: `Pick one deeper topic to explore based on which part you enjoyed most.`}
  ];

  brief.forEach(step => {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `<strong>${step.title}</strong><div style="color:var(--muted); margin-top:6px;">${step.desc} <span style="font-weight:600;">(${level})</span></div>`;
    list.appendChild(item);
  });

  // smooth focus for screen readers
  list.setAttribute('tabindex', '-1');
  list.focus();
}

function clearRecommendations() {
  const interest = document.getElementById('interest');
  if (interest) interest.value = '';
  const list = document.getElementById('recommendationList');
  if (list) list.innerHTML = '<p class="lead">No suggestions yet — enter your level and interest above to see a short plan.</p>';
}

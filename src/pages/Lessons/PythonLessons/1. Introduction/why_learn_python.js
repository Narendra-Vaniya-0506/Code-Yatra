import React from "react";
import '../../lessons.css';

export default function WhyLearnPython() {
  return (
    <div id="Why-learn-Python" className="lesson-content">
      <h2 className="lesson-title">Why learn Python?</h2>

      <h3 className="section-title">1. It's Easy to Understand</h3>
      <ul className="lesson-list">
        <li>Python looks like English.</li>
        <li>You don't need to write lots of confusing symbols.</li>
      </ul>

      <h3 className="section-title">2. You Can Do Many Things With It</h3>
      <p className="intro-text">Python is like a <b>super tool. You can use it for:</b></p>
      <ul className="lesson-list">
        <li>🌐Websites (Instagram, YouTube use Python)</li>
        <li>🤖Artificial Intelligence (self-driving cars, chatbots)</li>
        <li>📊Data Science (analyzing and making charts)</li>
        <li>⚙️Automation (make your computer do boring work for you)</li>
        <li>🎮Games (small fun games with Pygame)</li>
      </ul>

      <h3 className="section-title">3. Lots of Jobs Use Python</h3>
      <ul className="lesson-list">
        <li>Companies like Google, Netflix, and NASA use Python.</li>
        <li>Learning Python can help you get good jobs in the future.</li>
        <li>Even small businesses and startups love it because it's fast and simple.</li>
      </ul>

      <h3 className="section-title">4. Big Community = Easy Help</h3>
      <ul className="lesson-list">
        <li>Millions of people learn and use Python.</li>
        <li>If you get stuck, you can quickly find answers online.</li>
        <li>Tons of free tutorials, videos, and examples are already out there.</li>
      </ul>

      <h3 className="section-title">5. Future-Proof Skill</h3>
      <ul className="lesson-list">
        <li>Python is growing every year.</li>
        <li>It's not going away, it's getting more popular.</li>
        <li>Learning it now will help you for years.</li>
      </ul>
       <p className="created-by">— Created by Code Yatra</p>
       <button className="return-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
         Return to Top
       </button>

    </div>
  );
}

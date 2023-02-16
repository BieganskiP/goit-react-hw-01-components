import "./task-02.css";

export function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((stat) => (
          <li key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

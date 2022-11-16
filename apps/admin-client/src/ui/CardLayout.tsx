import { Link } from "react-router-dom";

export default function CardLayout({ cards }: any) {
  return (
    <section className="flex felx-row flex-wrap space-x-5">
      {cards.map((card: any, idx: any) => (
        <Link to={card.href} key={idx}>
          <div className="text-sky-500 bg-white px-10 py-10 shadow-sm hover:shadow-lg rounded-lg flex flex-col items-center space-y-3 border">
            {card.icon}
            <h4 className="text-lg font-semibold">{card.title}</h4>
          </div>
        </Link>
      ))}
    </section>
  )
}
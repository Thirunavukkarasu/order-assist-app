import { Link } from "react-router-dom";

export default function CardLayout({ cards }: any) {
  return (
    <section className="flex felx-row flex-wrap space-x-5">
      {cards.map((card: any, idx: any) => (
        <Link to={card.href} key={idx}>
          <div className="w-56 h-42 break-words text-indigo-500 bg-white px-10 py-8 shadow-sm hover:shadow-lg rounded-lg flex flex-col items-center space-y-2 border">
            {card.icon}
            <h4 className="text-center text-sm font-semibold">{card.title}</h4>
          </div>
        </Link>
      ))}
    </section>
  )
}
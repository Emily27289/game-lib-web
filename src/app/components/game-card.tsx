export default function GameCard({ title }: { title: string }) {
    return (
      <div className="bg-green-600 text-white p-6 flex justify-center items-center rounded-lg">
        {title}
      </div>
    );
  }
  
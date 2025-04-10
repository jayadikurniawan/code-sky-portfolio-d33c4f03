
interface TimelineItemProps {
  title: string;
  place: string;
  date: string;
  description?: string;
}

const TimelineItem = ({ title, place, date, description }: TimelineItemProps) => {
  return (
    <div className="mb-10 ml-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
      <span className="timeline-dot"></span>
      <div className="p-5 bg-white rounded-lg border border-gray-100 shadow-sm card-hover">
        <time className="text-xs font-normal text-gray-500 mb-1 block">{date}</time>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-base font-normal text-skyblue mb-2">{place}</p>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

export default TimelineItem;

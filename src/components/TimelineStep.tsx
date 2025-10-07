interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  delay?: string;
}

const TimelineStep = ({ number, title, description, isLast = false, delay = "0s" }: TimelineStepProps) => {
  return (
    <div className="flex gap-6 animate-fade-in" style={{ animationDelay: delay }}>
      <div className="relative">
        <div className="w-14 h-14 gradient-hero text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold shadow-soft">
          {number}
        </div>
        {!isLast && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-accent"></div>
        )}
      </div>
      <div className="flex-1 pb-12">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TimelineStep;

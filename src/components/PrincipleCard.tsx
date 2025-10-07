interface PrincipleCardProps {
  title: string;
  description: string;
  delay?: string;
}

const PrincipleCard = ({ title, description, delay = "0s" }: PrincipleCardProps) => {
  return (
    <div 
      className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-smooth hover:shadow-soft animate-scale-in"
      style={{ animationDelay: delay }}
    >
      <h3 className="font-bold text-lg text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default PrincipleCard;

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: string;
}

const FeatureCard = ({ icon, title, description, delay = "0s" }: FeatureCardProps) => {
  return (
    <div 
      className="bg-card p-6 rounded-2xl shadow-card border border-border hover:shadow-soft transition-smooth hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: delay }}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;

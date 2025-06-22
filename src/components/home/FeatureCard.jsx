import { Calendar, Award, Users } from "lucide-react";

export const FeatureCard = ({ feature }) => {
  const IconComponent = feature.icon;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200">
      <IconComponent
        className={`h-12 w-12 ${feature.iconColor} mx-auto mb-4`}
      />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
    </div>
  );
};

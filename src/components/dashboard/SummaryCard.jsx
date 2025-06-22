import { Award, Calendar, BookOpen } from 'lucide-react';

const iconComponents = {
    Award,
    Calendar,
    BookOpen
};

export const SummaryCard = ({ card }) => {
    const IconComponent = iconComponents[card.icon];

    return (
        <div className={`${card.bgColor} ${card.borderColor} border-2 rounded-lg p-6 transform hover:scale-105 transition-all duration-200 hover:shadow-lg`}>
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${card.bgColor.replace('50', '100').replace('900/20', '800/30')}`}>
                    <IconComponent className={`h-6 w-6 ${card.color}`} />
                </div>
                <div className="text-right">
                    <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{card.subtitle}</p>
                </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{card.title}</h3>
        </div>
    );
};
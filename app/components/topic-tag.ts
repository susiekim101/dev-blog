const badgeClass = 'badge rounded-lg';

const topicTagClass = (topic: string) => {
    const topicClass = {
        design: `${badgeClass} bg-purple-100 text-purple-600`,
        research: `${badgeClass} bg-blue-100 text-blue-600`
    }[topic.toLowerCase()];
    
    return topicClass;
};

export default topicTagClass;
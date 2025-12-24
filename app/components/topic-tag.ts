const topicTagClass = (topic: string) => {
    const topicClass = {
        array: `bg-purple-100 text-purple-600`,
        sort: `bg-blue-100 text-blue-600`,
        bfs: `bg-pink-100 text-pink-600`,
        dp: `bg-yellow-100 text-yellow-600`
    }[topic.toLowerCase()];
    
    return topicClass;
};

export default topicTagClass;
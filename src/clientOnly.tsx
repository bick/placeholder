import React, {useEffect, useState} from 'react';

const ClientOnly: React.FC = ({children}) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return <>{children} < />;
};

export default ClientOnly;

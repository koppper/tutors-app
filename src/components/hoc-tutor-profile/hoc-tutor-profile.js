import React from 'react';

const withTutorProfile = (WrappedComponent) => {
    return function WithTutorProfileWrapper({ tutor, ...props }) {
        const enhancedProps = tutor.hasError
            ? { children: <div>Error: {tutor.name}</div> }
            : {
                tutor,
                imageUrl: tutor.imageUrl,
            };

        return <WrappedComponent {...enhancedProps} {...props} />;
    };
};

export default withTutorProfile;

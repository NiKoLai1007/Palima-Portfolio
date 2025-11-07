import React from 'react';
import shan from '../../assets/shan.jpg'; // Ensure the image is in the correct path

const FrontPage = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            padding: '2rem'
        }}>
            {/* Text on the left */}
            <div style={{ flex: 1, paddingRight: '2rem' }}>
                <h1>Shan C. Palima</h1>
                <h2>Web Developer | Programmer | Tech Enthusiast</h2>
                <p>
                    Hello! I'm Shan, a passionate developer with a love for creating beautiful and functional web applications.
                    I enjoy learning new technologies and building projects that make a difference.
                </p>
            </div>
            {/* Image on the right */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <img
                    src={shan}
                    alt="shan"
                    style={{
                        borderRadius: '50%',
                        maxWidth: '400px',
                        width: '75%',
                        height: 'auto',
                        aspectRatio: '1 / 1',
                        objectFit: 'cover'
                    }}
                />
            </div>
        </div>
    );
};

export default FrontPage;
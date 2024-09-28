import React, { Component } from 'react';

class Example1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialMedia: []
        };
    }

    async componentDidMount() {
        await this.fetchSocialMedias();
    }

    fetchSocialMedias = async () => {
        try {
            const res = await fetch('/dataEx3.json');
            const data = await res.json();
            const socialMedia = data.SocialMedias;
            this.setState({ socialMedia });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div>
                <h3>Social Medias</h3>
                {this.state.socialMedia.map((media, index) => (
                    <p key={index}>{media}</p>
                ))}
            </div>
        );
    }
}

export default Example1;

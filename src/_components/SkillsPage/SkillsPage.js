import React from 'react';


const styles = {

    container: {
        padding: '50px 0px'
    },

    header: {
        textAlign: 'center',
        marginBottom: 50
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    field: {
        width: '80vw',
        maxWidth: 600
    },
};


class SkillsPage extends React.Component {

    constructor (props) {
        super(props);
    };

    render() {
        return (
            <div style={{backgroundColor: 'whiteSmoke'}} id="contact-page"> 
                <div style={styles.container} >
                    <h1 style={styles.header}> Developer Skills </h1>
                </div>
            </div>
        );
    }
};

export { SkillsPage };
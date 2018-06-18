import React from 'react';
import Grid from '@material-ui/core/Grid';
import OnVisible from 'react-on-visible';
import Grow from '@material-ui/core/Grow';
import Zoom from '@material-ui/core/Zoom';

import ReactSkillImg from '../_img/react-skill.svg';
import PrismaSkillImg from '../_img/prisma-skill.png';
import GraphqlSkillImg from '../_img/graphql-skill.svg';
import NodejsSkillImg from '../_img/nodejs-skill.svg';
import JavascriptSkillImg from '../_img/javascript-skill.svg';
import GitSkillImg from '../_img/git-skill.svg';
import JavaSkillImg from '../_img/java-skill.svg';



const styles = {

    container: {
        padding: '20px 50px 50px 50px'
    },

    header: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 48
    },

    centerChildren: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },

    skillItem: {
        maxHeight: 200
    },
};


const Skill = (props) => (
  
    <Grid item xs={12} sm={6} md={3} style={styles.centerChildren}>
        <Grow
            in={props.visible}
            style={{ transformOrigin: '0 0 0', transitionDelay: props.visible? props.transitionDelay : 0  }}
            {...(props.visible ? { timeout: 500 } : {})}
        >   
            {props.children}
        </Grow>
    </Grid>
);


class SkillsPage extends React.Component {

    state = {visible: false};

    handleVisibility = () => {
        if (!this.state.visible) {
            this.setState({
                visible: true
            });
        }
    }

    render() {
        const { visible } = this.state;

        return (
            <div style={{backgroundColor: 'whiteSmoke'}} id={this.props.id} > 
                <div style={styles.container} >
                    <h1 style={styles.header}> Developer Skills </h1>
                    <Zoom in={visible} style={{ transitionDelay: visible ? 2000 : 0 }}>
                        <h1 style={{textAlign: 'center', marginBottom: 20}}>
                            This site was even built using ReactJS!
                        </h1>
                    </Zoom>   
                    <OnVisible onChange={this.handleVisibility}> 
                      <Grid container spacing={24} alignItems='center' justify='center' >            
                          <Skill transitionDelay={0} visible={visible} >
                              <img src={ReactSkillImg} alt="ReactJS Logo" width={175} height={175} />
                          </Skill>
                          <Skill transitionDelay={250} visible={visible} >
                              <div style={styles.centerChildren}>
                                  <img style={{marginTop: 20}} src={GraphqlSkillImg} alt="GraphQL Logo" height={135} />
                                  <div style={{textAlign: 'center', fontSize: 42, marginTop: 10, color: '#E10098'}}>
                                      GraphQL
                                  </div>
                              </div>
                          </Skill>
                          <Skill transitionDelay={500} visible={visible} >
                              <img src={PrismaSkillImg} alt="Prisma Logo" width={280}/>
                          </Skill>
                          <Skill transitionDelay={750} visible={visible} >
                              <img src={JavaSkillImg} alt="Java Logo" height={200} />
                          </Skill>
                          <Skill transitionDelay={1750} visible={visible} >
                              <img style={{marginTop: 25}} src={NodejsSkillImg} alt="NodeJS Logo" height={120} />
                          </Skill>
                          <Skill transitionDelay={1500} visible={visible} >
                              <img src={JavascriptSkillImg} alt="JavaScript Logo" height={140} />
                          </Skill>
                          <Skill transitionDelay={1250} visible={visible} >
                              <img src={GitSkillImg} alt="JavaScript Logo" width={200} />
                          </Skill>
                          <Skill transitionDelay={1000} visible={visible} >
                              <div>
                                  <div style={{textAlign: 'center', fontSize: 48, fontWeight: 'bold', color: '#00D8FF'}}>
                                      React
                                  </div>
                                  <div style={{textAlign: 'center', fontSize: 48, fontWeight: 'bold', color: '#00D8FF', marginTop: 30}}>
                                      Native
                                  </div>
                              </div>
                          </Skill>
                      </Grid>
                    </OnVisible>
                </div>
            </div>
        );
    }
};

export { SkillsPage };
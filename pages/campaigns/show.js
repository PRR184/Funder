import React, {Component} from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
import {Card, Grid, Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component{

    static async getInitialProps(props){

        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        console.log(summary);
        return {
            address:props.query.address,
            minimumContribution:summary[0],
            balance:summary[1],
            requestCount:summary[2],
            approversCount:summary[3],
            manager:summary[4]
        };
    }

    renderCards(){

        const {
            minimumContribution,
            balance,
            requestCount,
            approversCount,
            manager
        }=this.props;

        const items = [
            {
                header:manager,
                description:'The Manager created this campaign and can withdraw money',
                meta:'Address of Manager',
                style : {overflowWrap: 'break-word'}
            },
            {
                header:minimumContribution,
                description:'You must contribute atleast this much Wei to become a contributor',
                meta:'Minimum Contribution (Wei)'
            },
            {
                header:requestCount,
                description: 'A request is made to withdraw money from contract. Requests are approved by contributors.',
                meta: 'Number of Requests'
            },
            {
                header:approversCount,
                description: 'Number of people who have already donated to this campaign.',
                meta:'Number of Approvers'
            },
            {
                header:web3.utils.fromWei(balance,'ether'),
                description: 'The Balance is ow much money the campaign has left to spend',
                meta:'Campaigns Balance (Ether)'
            },
        ]
        return <Card.Group items={items}/> ;
    };

    render(){
        return(
            <Layout>
                <h3>Campaign Show</h3>

                <Grid>
                    <Grid.Row>

                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address}/>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
                
            </Layout>
        );
    }
}

export default CampaignShow;
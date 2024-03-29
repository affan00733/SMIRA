import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import Causes from '../../api/cause'
import {useParams} from 'react-router-dom'
import CauseTabs from './alltab'
import CauseSidebar from './sidebar'
import Logo from '../../images/logo.png'
import Footer from '../../components/footer';



const CauseSinglePage =(props) => {

    const {id} = useParams()

    const CauseDetails = Causes.find( item => item.id === id)

    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={CauseDetails.cTitle} pagesub={'Case Single'}/> 
            <div className="wpo-case-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="wpo-case-details-wrap">
                                <div className="wpo-case-details-img">
                                    <img src={CauseDetails.cImgSingle} alt=""/>
                                </div>
                                 <CauseTabs/>
                            </div>
                        </div>
                        <CauseSidebar/>
                    </div>
                </div>
            </div>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CauseSinglePage;

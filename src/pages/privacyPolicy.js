import React from 'react'
import BrandCrumb from '../components/brandCrumb';
import Meta from '../components/meta';
import Container from '../components/container';

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Get All Here"} />
            <BrandCrumb title="Privacy Policy" />
            <Container class1='policy-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'></div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PrivacyPolicy;

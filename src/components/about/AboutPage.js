// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <p className="display-3">
            Swastik Communication is a renowned EBABX and Security System dealer located in Patna, India. We deal with branded and quality-tested Analogue PBX, Digital PBX, Hybrid PBX and IP PBX. Our team provides a range of EPABX repair and maintenance services concerning SIP trunk issues, extension issues, incoming/outgoing calls, console wiring/connection issues, flash/recall trouble, etc. Furthermore, we also deal with a broad range of security systems like CCTV cameras, autodialers, video/audio door phones, biometric systems, time attendance systems, electronic safety lockers, speed governors, guard monitoring systems, vehicle tracking systems, etc. We assure that all our quality EPABX/security systems and EPABX services are offered at nominal rates. Contact us for further details.About Me</p>
            </div>
        );
    }
}

export default AboutPage;

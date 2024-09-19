import { PDFDownloadLink, PDFViewer, } from '@react-pdf/renderer';
import AppliedJobsDetails from './AppliedJobsDetails';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const AppliedJobs = () => {
    const [generateSummary, setGenerateSummary] = useState(true);

    const {data,isLoading} = useQuery({
        queryKey:["appliedJob"],
        queryFn:()=>
    })

    return (
        <div>
            <div>

            </div>
            {
                generateSummary ||
                <div className=''>
                    <PDFViewer style={{ width: '100%', height: '500px' }}>
                        <AppliedJobsDetails></AppliedJobsDetails>
                    </PDFViewer>
                </div>
            }

            {
                generateSummary && <button onClick={() => setGenerateSummary(!generateSummary)} className='btn'>Generate Summary</button>
            }

            {
                generateSummary ||
                <PDFDownloadLink document={<AppliedJobsDetails />} fileName="example.pdf">
                    {({  loading,  }) =>
                        loading ? 'Loading document...' : 'Download now!'
                    }
                </PDFDownloadLink>
            }
        </div>
    )
};


export default AppliedJobs;
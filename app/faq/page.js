
import { Container } from '@/components'
import PageHeading from '@/components/PageHeading/PageHeading'
import React from 'react'

const FaqPage = () => {
    return (
        <div className='__faq py-20'>
            <Container>
                <div>
                    <PageHeading title='Dubai Car Rental FAQs' />
                    <p><span className="text-primary">WheelsOnClick.com</span> presents a comprehensive set of frequently asked questions that you might need answers for before renting a car in the UAE. No matter if you decide to rent a Kia Picanto, Cadillac Escalade or even a Ferrari 488 in the emirates, the below answers apply. Source: various car rental companies operating in Dubai, Abu Dhabi, Ras Al Khaimah and RTA (Road and Transport Authority) itself. Please feel free to share your suggestions and comments with us.</p>
                    <p>Note: Rental car company, car hire company and car lease company all mean the same. They are used interchangeably for maximum effect.</p>
                    <p>Passport holders of GCC, US, UK, Canada and certain other countries can drive on their home country license in the UAE. Read more</p>

                    <div className="my-6"></div>

                    <p>
                        Here's a complete list of traffic fines and charges by RTA Dubai .
                    </p>
                    <p>
                        The above FAQs are written for those interested in hiring a car in Dubai and are gathered from various sources including our partner car rental companies. However, please ask / confirm the details with the car rental company you deal with or Dubai Road & Transport Authority (RTA) authorities for accurate answers. We will be updating this section on an ongoing basis. If you would like to suggest any additions or corrections to this section, please feel free to email us on <span className="text-primary">info@onetapdrive.com</span>.
                    </p>
                    <p>
                        <span className="text-primary">OneTapDrive</span> claims no responsibility regarding the authenticity and applicability of the above questions & answers and any loss that you may incur by referring to the above information.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default FaqPage
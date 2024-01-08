import React, { useState } from 'react'
import img1 from '../assets/ahmpocadqwlbc.svg'
import img2 from '../assets/gafcgfriechbbwe.svg'
import img3 from '../assets/ifcxepfcub.svg'
import img4 from '../assets/mawfnjb.svg'
import img5 from '../assets/nxvkkte.svg'
import img6 from '../assets/owjivbc.svg'
import img7 from '../assets/qokkejoctwuiddlrq.svg'
import img8 from '../assets/scyyjmw.svg'
import img9 from '../assets/wkcdkdhkdhqu.svg'
import img10 from '../assets/worzxbw.svg'
import img11 from '../assets/yxymabrjzqvocvwv.svg'
import img12 from '../assets/yyrceslqfnxnqncdllh.svg'
import img13 from '../assets/ahmpocadqwlbc.svg'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import dimg1 from '../assets/img1.jpg'
import dimg2 from '../assets/img2.jpg'
import dimg3 from '../assets/img3.jpg'
import dimg4 from '../assets/img4.jpg'
import dimg5 from '../assets/img5.jpg'
import dimg6 from '../assets/img5.jpg'
import dimg7 from '../assets/img7.jpg'
import dimg8 from '../assets/img8.jpg'
import dimg9 from '../assets/img9.jpg'
import dimg10 from '../assets/img10.jpg'
import dimg11 from '../assets/img11.jpg'
import dimg12 from '../assets/img12.jpg'
import dimg13 from '../assets/img1.jpg'

export default function TreatCard(props) {
    const treatment = [
        {
            image: img1,
            title: "High Risk Pregnancy",
            subTitle: 'Make your pregnancy journey smoother',
            detail_page: {
                image: dimg1,
                details: `A high-risk pregnancy is one in which the mother's health or the baby's growth and development may be jeopardised due to a new or existing health condition. Health issues may also increase the likelihood of premature birth.
                If you are over the age of 35 or under the age of 17, you may be carrying a high-risk pregnancy. Other common reasons for a high-risk pregnancy include:
                Obesity
                Diabetes 
                Cardiovascular disease
                Twin pregnancy
                Pre-eclampsia
                High blood pressure
                Previous pregnancy complications
                We provide comprehensive, personalised care for high-risk pregnancies, assisting you throughout your pregnancy as well as during labour and delivery `
            }

        },
        {
            image: img2,
            title: "Sexually Transmitted Diseases (STDs)",
            subTitle: 'Better to protect rather than regret',
            detail_page: {
                image: dimg2,
                details: `Many STDs have minor symptoms that often go unnoticed. Other symptoms can be quite noticeable and cause a great deal of discomfort for an individual.
                Itching and irritation in and around the reproductive organs, as well as painful intercourse, are some common signs. Each STD has distinct symptoms that tend to characterise the disease as it progresses. To avoid the condition from worsening, it is critical to report all symptoms to a gynaecologist. 
                STDs can cause infertility, lesions, and, in some cases, cancer if they are left untreated. It is usually recommended to be tested for sexually transmitted diseases at least once a year. The need for the test can be determined by the individual if they are in a committed relationship with only one partner.
                The need for STD testing is usually determined by the patient's lifestyle, the number of sexual partners they have, and whether or not they use adequate protection. STDs are not protected by birth control pills.
                If you are concerned about whether or not you have contracted an STD, you should make an appointment and get tested as soon as possible.`
            }

        },
        {
            image: img3,
            title: "Infertility",
            subTitle: 'Lets not stress',
            detail_page: {
                image: dimg3,
                details: `Infertility is defined as unsuccessful attempts to conceive for at least a year. Even if you've been trying to conceive for about a year and haven't been successful, it's a good idea to have an evaluation to rule out any problems that might be preventing you from getting pregnant.
                An evaluation and examination to determine the underlying cause is the first step in treatment. Sperm tests, blood tests, or other lab tests, diagnostic imaging such as an ultrasound or CT scan, and in-office procedures such as hysteroscopy to look inside your uterus and assess the opening to your fallopian tubes may all be part of your evaluation. 
                Medications to help stimulate or control ovulation, medications to "remodel" the uterine lining, minimally invasive procedures to remove fibroids or address other issues that may be preventing insemination or implantation, or surgery to correct structural issues are all possible treatment options once the underlying cause has been determined. 
                Fertility drugs and IVF (in vitro fertilisation) are two options that can be used. You and your partner will have the opportunity to talk about all of your concerns before starting any treatment. `
            }
        },
        {
            image: img4,
            title: "Menopause",
            subTitle: 'If it ain’t an illness, then don’t treat it like one',
            detail_page: {
                image: dimg4,
                details: `Menopause refers to the end of your period as a result of hormonal changes brought on by ageing. When you go 12 months without having a period, you are considered to be in menopause. 
                Menopause isn't the only cause of irregular periods; if you're experiencing pre-menopause symptoms like irregular or heavy periods, you should get checked out to rule out other possibilities like tumors and hormone-related diseases and conditions.
                Menopause is an age-related change that cannot be "cured." There are, however, treatments for specific symptoms like fatigue, moodiness, and hot flashes.
                Hormone replacement therapy (HRT) is one of the most common treatments for women who are approaching or are in the midst of menopause. Hormones are involved in a variety of processes that help women maintain their health.
                HRT works by replacing hormones that have depleted during premenopause, allowing women to alleviate many of the symptoms of premenopause while also assisting in the restoration of normal body function. `
            }
        },
        {
            image: img5,
            title: "Endometriosis",
            subTitle: 'Alleviate your symptoms',
            detail_page: {
                image: dimg5,
                details: `The most common symptom of endometriosis is pain. Some women don't have any symptoms at all, but if they do appear, you might notice:
                Pelvic discomfort
                Pain during intercourse
                Painful menstrual periods 
                In the week leading up to your period, you may experience pain
                Pain while urination
                Pain during bowel movement
                The extent of your endometriosis isn't always determined by the severity of your 
                pain. You may have a small patch of endometriosis with severe pain, or you may 
                have extensive endometriosis with only mild pain.
                Endometriosis can make it difficult to conceive. Usually, on an infertility evaluation, many women who don't develop symptoms find out they have endometriosis. Endometriosis affects approximately 40% of women who are unable to conceive. A normal routine evaluation can go a long way in keeping you healthy.
                `
            }
        },
        {
            image: img6,
            title: "Fibroid Treatment",
            subTitle: 'Don’t wait for the symptoms to progress',
            detail_page: {
                image: dimg6,
                details: `Myomas, also known as Uterine Fibroids, are growths that develop in the uterine 
                wall. They're usually harmless (noncancerous). Uterine fibroids can develop as  
                a result of:
                Genetics
                Hormonal Imbalance
                Pregnancy
                Some women are unaware that they have uterine fibroids until they undergo a pelvic exam or an ultrasound. When a woman complains of unusually heavy periods, uterine fibroids are frequently discovered during an exam. Fibroids can also have the following symptoms:
                Constant feeling of fullness
                Pain during intercourse
                Pelvic pressure or pain
                Lower back pain 
                Frequent urination 
                Uterine fibroids can sometimes affect your fertility. If you're having trouble getting pregnant or staying pregnant, more than 70% of women suffer from the same. `
            }
        },
        {
            image: img7,
            title: "PCOS Care",
            subTitle: 'Personalized treatment for the cysters',
            detail_page: {
                image: dimg7,
                details: `This condition causes an increase in the production of androgens, which are hormones like testosterone. Specialists at our clinic have extensive experience diagnosing and treating adolescent girls with polycystic ovary syndrome (PCOS). Our endocrinologists, nutritionists, and psychologists work together to provide patients with personalized care.
                Early detection and treatment can help to reduce symptoms such as irregular menstrual cycles and excessive facial and body hair. It can also help prevent adult complications like infertility and type 2 diabetes. Adult polycystic ovary syndrome is also diagnosed and managed here.
                Losing weight may be the most effective way to reduce the risk of adult complications. It is especially effective when combined with medications that suppress androgen production and regulate menstrual cycles. 
                Follow-up visits every three months can help ensure that you are on track to meet your weight loss and fitness objectives. Our doctors may repeat blood tests to measure insulin and androgen levels during these appointments. 
                `
            }
        },
        {
            image: img8,
            title: "Intrauterine Insemination (IUI)",
            subTitle: 'Make the miracle happen',
            detail_page: {
                image: dimg8,
                details: `We use intrauterine insemination (IUI) because this method of injecting concentrated sperm directly into the uterus has a higher pregnancy success rate than other methods of artificial insemination. When you choose, you can be confident that we will investigate the cause of your infertility before beginning any treatment. We may also suggest other more appropriate options that may assist you in becoming pregnant.
                Using the intrauterine insemination (IUI) treatment technique, our team has achieved incredible success rates. Through our advanced IUI treatments, our fertility specialists have assisted thousands of couples in realizing their dreams of becoming parents.
                The risks of intrauterine insemination (IUI) are extremely low. However, during an IUI cycle, fertility medications may stimulate the ovaries to produce more than one egg. If both eggs are fertilized, multiple births are possible. IUI may also cause hot flashes, mood swings, headaches, and nausea.`
            }
        },
        {
            image: img9,
            title: "Adolescent Health",
            subTitle: 'Make your teenage years care free',
            detail_page: {
                image: dimg9,
                details: `Adolescent gynecological problems are fairly common, and they can have physical and psychological consequences for young women and teenagers. 
                Vaginal disorders, vulval injury, menstrual problems, sexual development disorders, abnormal skin changes, and abnormal vaginal discharge are all common adolescent gynecological issues. To ensure a safe and healthy transition to adulthood, comprehensive age-appropriate care and treatment options are offered based on the condition and its effects.
                Our gynecologists are well-known for their warm and caring demeanor. Women of all ages receive age-appropriate care from us. Adolescents receive preventive, diagnostic, and therapeutic services from us. We want to provide young adults with clinically reliable care, awareness, and education in a safe and private setting.
                During puberty, gynecological changes in your body can have a negative impact on your mental health. We hope to navigate these stressors by promoting positive health. For young girls' health concerns, we provide individualized advice and one-on-one counseling.`
            }
        },
        {
            image: img10,
            title: "Normal Delivery",
            subTitle: 'Embrace the natural way',
            detail_page: {
                image: dimg10,
                details: `From the beginning of pregnancy, our obstetricians create specialized birthing plans and labor protocols to encourage natural delivery. Vaginal delivery and natural childbirth are other terms for normal delivery. It is a type of childbirth in which the mother gives birth naturally, with little or no medical or surgical intervention.
                To endure and control pain, pregnant women who choose to deliver naturally rely on a variety of evidence-based breathing and relaxation techniques. Choosing a natural delivery method can be excruciating. Extreme exhaustion, feeling cold or shaky, soreness, uterine cramping, and a sense of accomplishment are all possible side effects. Throughout the various stages of labor and childbirth, our care team provides complete guidance and support.
                `
            }
        },
        {
            image: img11,
            title: "Health Check-up",
            subTitle: 'Stay a step ahead',
            detail_page: {
                image: dimg11,
                details: `We provide a comprehensive screening of women's primary, menstrual, sexual, and behavioral health in order to prevent diseases or detect them early enough to treat them effectively. 
                Our preventive care services are designed to provide comprehensive screening, which includes a routine gynecological examination, vaccinations, pap smear, and pelvic exam. These examinations provide women with reassurance and peace of mind about their gynecological health.
                A routine medical examination can aid in the early detection of illnesses and can also help you reduce your risk of developing a gynecological illness. It is recommended to have a routine health checkup at least once a year.`
            }
        },
        {
            image: img12,
            title: "Laparoscopy",
            subTitle: 'Minimally invasive procedure for a healthy lifestyle',
            detail_page: {
                image: dimg12,
                details: `Our gynecologists use laparoscopies, a type of minimally invasive surgery, to treat a wide range of gynecological conditions, and complete complex operations with accuracy and precision using small incisions. 
                Laparoscopic gynecological surgery is used to diagnose a woman's reproductive organs through the abdomen as an alternative to open surgery. In comparison to open surgery, a laparoscopy requires a smaller incision in the abdomen. It also takes less time to recover than the latter.
                A laparoscope is inserted into the body through this small incision. This sleek and illuminated device is used to figure out the main problematic cause. Endometriosis, fibroids, ovarian cysts, pelvic inflammatory disease, pelvic adhesions, reproductive cancers, infertility, and other conditions can affect women.`
            }
        },
        {
            image: img13,
            title: "Vaccination And Check-up",
            subTitle: 'Trap the root cause',
            detail_page: {
                image: dimg13,
                details: `Regular health checks can detect any early warning signs of illness. During a health check-up, our doctors will inquire about your medical history, family history of the disease, and your lifestyle, which includes your diet, weight, physical activity, alcohol consumption, and smoking habits. Kidney and liver function, blood tests, glucose levels, chest x-ray, ECG, abdomen ultrasound, and urine analysis are among the tests done. Everyone should have a routine checkup once a year, however, if you have an underlying health problem, you should see a doctor more frequently.
                We use a multidisciplinary team approach to prevent, detect, and treat a variety of illnesses, including diabetes, hypertension, obesity, cardiac issues, and cancer. Our team of preventive health experts encourages you to adopt healthy lifestyle habits and provides customized solutions to help you maintain your health and improve your quality of life.
                Services like immunization are also offered at our clinic. It is a process that protects people from harmful infections and illnesses before they become infected. Vaccines are used to provide immunity. Some of these include - the pneumococcal vaccine, an annual flu shot, a tetanus-diphtheria-pertussis booster, a herpes zoster vaccine, and vaccines for conditions like Measles, Mumps, Hepatitis, and more. `
            }
        },
    ]

    //    
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8; //items per page
    const endOffset = itemOffset + itemsPerPage; //end page count
    const currentItems = treatment.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(treatment.length / itemsPerPage);



    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % treatment.length;
        setItemOffset(newOffset);
    };


    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <div className='d-flex flex-wrap justify-content-evenly gap-2 m-2 p-2' style={{ width: '100%' }} >
                    {currentItems.map((variant) => (
                        <Link style={{ width: "20rem", height: "15rem", textDecoration: "none" }} to="/treatment-details" onClick={() => { props.setTreat(variant) }} className='bg-success bg-opacity-25 m-2' key={variant.title}>
                            <div className="border border-black" style={{ width: "100%", height: "15rem" }}>
                                <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: "15rem", width: "100%" }}>
                                    <img className="d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px', border: '2px solid green', borderRadius: '50%', margin: '5px', color: 'green' }} src={variant.image} alt='...' />
                                    <h5 className='text-center m-2 text-dark'>{variant.title}</h5>
                                    <p className='text-center text-dark'>{variant.subTitle}</p>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
                {(props.show === true) ?
                    <div className=''>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< prev"
                            renderOnZeroPageCount={null}
                            containerClassName='paginate'
                            previousClassName='page'
                            nextClassName='page'
                            activeClassName='active'
                            pageClassName='page'
                        />
                    </div> : <Link className='btn btn-outline-success mt-3 p-2' to="/treatment">View More</Link>}
            </div>

        </>
    )
}

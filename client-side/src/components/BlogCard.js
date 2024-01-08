import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import { Link } from 'react-router-dom';


const BlogCard = (props) => {
    const BlogDetails = [
        {
            image: blog1,
            title: 'Genital Tract Infections',
            details: `Infections can cause conditions in which the human body's functions are impaired. Genital tract infections are caused by bacteria, fungi, parasites, and viruses, these agents infect the reproductive parts or organs of the genital tract. In both males and females, the infection can affect various reproductive organs such as the testis and epididymis in males and the vagina, fallopian tube, and uterus in females and untreated severe infections can cause infertility and morbidity. These infections can both be prevented and treated. Let us take a closer look at it.
                Infection of the genital tract or the reproductive tract can occur in one of three ways.
                Sexually Transmitted Disease (STD): The pathogen is transmitted through sexual contact, resulting in infection. Infection is caused by pathogens such as chlamydia, gonorrhea, and the human immunodeficiency virus.
                Endogenous Infection: This type of infection is caused by organisms that are already present in the genital tract, known as genital flora. Bacterial vaginosis and vulvovaginal candidiasis are two common endogenous infections.
                Iatrogenic Infection: It occurs as a result of medical procedures that are not properly performed or managed, such as surgery, abortion, or poor delivery. Medical procedures that are performed in an unsafe manner can lead to the spread of bacteria that can cause infection.
                Types of genital tract infections:
                
                Upper Genital Tract Infection: The infection occurs in the upper genital tract. Organs such as the endometrium, uterine wall, fallopian tube, ovaries, and others become infected in females. In males, the causative organism can travel from the lower tract (urethra) to the reproductive part epididymis and cause infection.
                Lower Genital Tract Infection: The infection affects the vulva, vagina, and cervix, which are the lower organs of the genital tract. Sexual transmission of the pathogen or direct contact is the most common way to become infected. Infection can also occur when an organism in the gastrointestinal tract multiplies, causing infection. Prostatitis, pyelonephritis, cystitis, and urethritis can all occur in men.
                When it's difficult to identify which organ has been infected, the condition is known as a pelvic inflammatory disease (PID). Sexual contact, instrumentation, or irritation that causes the organism to grow is the route of transmission for genital infections. 
                It can also be passed down the birth canal from mother to child. During sexual intercourse, Chlamydia trachomatis, Neisseria gonorrhoeae, trichomonas vaginalis, human immunodeficiency virus, treponema pallidum, herpes simplex virus, and other infections can be acquired. Syphilis, herpes simplex virus (HSV), and cytomegalovirus (CMV) are all infections that are passed down from mother to child. 
                If you are concerned about the contraction of an infection, you should make an appointment and get tested as soon as possible. You should not wait until the end of the year to take the exam.
                Health checkups can be a savior.`,
            subdetails: 'Genital tract infections are caused by bacteria, fungi, parasites, and viruses, these agents infect the reproductive parts or organs of the genital tract.'
        },
        {
            image: blog2,
            title: 'Losing too much blood during periods? Watch out for these signs!',
            details: `Blood loss is a normal part of a woman's life. Every month, the cycle repeats itself, and you will experience blood loss. However, blood loss isn't measured. It's possible that you'll lose more blood than usual at times, or that you'll bleed less. It's also an indicator of a normal healthy body. Menstruation, also known as periods, is a natural occurrence. The menstrual cycle lasts 28-30 days, and you bleed for 3-7 days every month. The days are marked by mild pain and cramps, but for some, they can be excruciatingly painful.
            A lot of women are concerned about heavy bleeding. Heavy bleeding can make it difficult to go about your daily routine. It can also cause excruciating pain, leakage, cramps, and other health issues. But how would you know whether it's heavy bleeding if you can't quantify the blood? Look for signs and symptoms that indicate whether or not there is excessive bleeding. These signs are easy to spot, and if you see them in your period blood, it’s an indication of heavy bleeding.
            There are signs that will alert you if you have lost too much blood
            Every hour or two hours, the blood flow will soak the pad or tampon
            To avoid leakage or control your bleeding, you may need to double up pads
            If you have to change your pad or tampon in the middle of the night
            When bleeding does not stop after 7 days
            When you are unable to perform your regular activities on your period days
            If the bleeding is accompanied by severe pain, stomach aches, tiredness, shortness of breath, or fatigue
            If you experience any of these symptoms, you may have heavy bleeding during your period. But wait, there's more! You're not the only one who feels this way. There are many people like you, and these symptoms do not indicate that you have a serious problem. It can be normal, even if it's unpleasant and bothersome. It's best if you ask the doctor about it. 
            Heavy bleeding can have varied causes.
            You might be wondering what could be the cause of the heavy bleeding? You may find yourself in this situation for a variety of reasons. Let's find out more about them.
            Problems with the uterus are one of the most common causes of heavy bleeding.
            Uterine polyps and fibroids
            If the uterus or cervix are cancerous
            Certain birth control methods, such as intrauterine devices
            Pregnancy or miscarriage complications
            Menorrhagia can be treated in a variety of ways, and you can continue to work normally during your period. If left untreated, it has the potential to worsen your health by causing complications such as anaemia. You must seek medical advice for early intervention.`,
            subdetails: 'Watch out for these signs!'
        },
        {
            image: blog3,
            title: 'Non-stress Test',
            details: `The non-stress test is an important pregnancy test that doctors recommend to expectant mothers in their third trimester. To understand the significance of the non-stress test, you must first understand what it is, how it is done, and what is the significance of the results. 
            Non-stress test (NST) - What it is?
            
            The non-stress test, also known as cardiotocography, is a non-invasive prenatal test. In response to your baby's movements, it records and evaluates his or her heart rate. It causes no stress to you or your baby and is completely safe, that’s why it is named a non-stress test.
            
            Who needs to get the NST done?
            
            The Non-Stress Test is recommended for all pregnant women, but it is especially important in high-risk pregnancies. It is usually done between the 26th and 28th weeks of pregnancy. The doctor can tell you if the baby is growing normally or if it requires regular and vigilant monitoring on the basis of the results. The test becomes even more crucial if you have:
            Multiple pregnancies
            Complications during previous pregnancies
            Complications during the current pregnancy
            High blood pressure, diabetes, or heart problems 
            Decreased fetal movement 
            Rh-negative blood group 
            Bump smaller than expected
            
            Why is NST done?
            
            This test is used to determine the health of the fetus. It's a tool for detecting placental insufficiency and fetal hypoxia during pregnancy. If the non-stress test is non-reactive, that means that your baby isn't getting enough oxygen and that additional testing may be required.
            
            What to expect from NST?
            
            In a reactive non-stress test, the baby's heart rate is expected to increase in response to movement or contractions, which is considered normal and indicates that your baby is growing normally. Do not panic if your baby's heart rate does not accelerate; it could simply mean that your baby is sleeping.
            
            How is NST done?
            
            NST is an outpatient procedure that takes 20-30 minutes and is completely safe for both you and your baby.
            Before beginning the test, the doctor will take your blood pressure. You'll need to lie down with two belts around your stomach. One belt monitors your baby's heartbeat, while the other monitors its contractions. In case you are pregnant with a pair of twins then you will have to wear extra belts to check their heartbeats. Throughout the test, your blood pressure will be checked at regular intervals. Whenever your baby moves or kicks, or during contractions, the doctor checks its heartbeat. If your baby falls asleep, the nurse may rub your belly, ring a bell, or use an acoustic device to wake him or her up.
            
            Results of NST:
            
            The test results provide crucial information about the baby's health and whether it is receiving adequate oxygen. A Non-Stress Test can be either:
            Reactive: During the test, the baby's heart rate reached the expected level (at least twice as normal).
            Non-Reactive: During the test, the baby's heart rate did not reach the expected level. This can happen If the test is performed while the baby is sleeping, or could also indicate placental insufficiency or fetal hypoxia. In such cases, your doctor may recommend that you undergo additional testing.
            
            What if NST results are non-reactive?
            
            If your baby doesn't react to the test, don't panic. When a baby isn't in the mood to change positions, it will sleep through the entire process, resulting in a non-reactive result.
            If your result is non-reactive, your doctor may recommend a Contraction Stress Test. It is performed after the mother has reached the gestational age of 34 weeks. The test causes contractions and measures how your baby's heart responds. A healthy heartbeat, whether normal or accelerated, indicates that your baby will be healthy during labor. If the baby's heart rate drops during contractions, it indicates fetal growth retardation or oxygen deficiency. 
            In some cases, additional tests or early delivery might be recommended.`,
            subdetails: 'How important is it?'
        },
    ]





    return (
        <>
            <div className='d-flex flex-wrap justify-content-evenly gap-2 m-2  mt-4 p-2'>
                {
                    BlogDetails.map((data) => (
                        <Link style={{ textDecoration: 'none' }} onClick={() => { props.setBlog(data) }} to={'/blogs-details'} key={data.title}>
                            <Card style={{ width: '26rem', height: '33rem' }} className='d-flex'>
                                <Card.Img variant="top" src={data.image} />
                                <Card.Body className='d-flex gap-2 flex-column justify-content-between'>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        {data.subdetails}
                                    </Card.Text>
                                    <Button variant="primary">Read More...</Button>
                                </Card.Body>
                            </Card>

                        </Link>
                    ))
                }
            </div>
            {props.show ? <div className='d-flex justify-content-center'><button className='btn btn-outline-dark p-2 m-2'><Link style={{ textDecoration: 'none', color: 'black' }} to={'/blogs'}>Read More</Link></button></div> : null}
        </>
    )
}

export default BlogCard

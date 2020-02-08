import React , {useState} from "react";
import TopHeader from '../../components/Header';
import styles from './AccAndSightEdit.module.scss';

import { Container } from "react-grid-system";

const AccAndSightEdit = (props) => {
    const lineName = "Lillafüredi Állami Erdei Vasút";
    const image = "http://laev.hu/images/allando_cikk/dscn6192.jpg";
    const pricing = "http://www.eszakerdo.hu/magyar/erdvinfo/menetdij-tablazat_laev_180502-.pdf";
    const schedule = "http://www.eszakerdo.hu/erdeivasut/menetrend/191216-200408_mnr_LAEV_2020_tel1.pdf";
    const desc = "A Lillafüredi ÁEV Magyarország egyik legszebb vonalvezetésű kisvasútja, valódi hegyipálya, vonala meredek hegyoldalakban, különleges völgyhidakon, alagutakon vezet keresztül. Városi környezetből indulva, a diósgyőri vár közeléből juthatunk el vonataival számos látványosághoz: a Garadna völgyben a Hámori-tó partján kanyarogva a lillafüredi Palotaszállóhoz, vízeséshez, barlangokhoz, az újmassai őskohóhoz, és számos gyalogos túra kiindulópontjára. Forrás: kisvasut.hu";
    const events = "http://www.eszakerdo.hu/magyar/erdeivasut/2019/esemenynaptar/esemenynaptar_laev_paev_2019.pdf";
    const additional = "http://www.eszakerdo.hu/magyar/erdeivasut/2019/laev_vadaszkurt_expressz/vadaszkurt-ex_190928_plakat.pdf";
    const actualEvents = "http://www.eszakerdo.hu/magyar/menu/erdvinfo_uj.htm"
    return(
        <>
            <TopHeader />
            <Container>
                <div className={styles.container}>
                    <div className={styles.formContainer}>
                        <form>
                            <span className={styles.title}>{lineName}</span>
                                <input placeholder="Name" className={styles.input} value={lineName} type="text" name="name" />
                                <input placeholder="Image" className={styles.input} value={image} type="url" name="image" />
                                <input placeholder="Pricing" className={styles.input} value={pricing} type="url" name="pricing" />
                                <input placeholder="Schedule" className={styles.input} value={schedule} type="url" name="schedule" />
                                <textarea placeholder="Description" className={styles.textboxinput} value={desc} name="description"  />
                                <input placeholder="Events" className={styles.input} value={events} type="url" name="events" />
                                <input placeholder="Actual Events" className={styles.input} value={actualEvents} type="url" name="actualEvents" />
                                <input placeholder="Additional" className={styles.input} value={additional} type="url" name="additional" />
                            <button className={styles.button} type="submit">Save</button>
                        </form>
                    </div>  
                </div>
            </Container>
        </>
    )

}

export default AccAndSightEdit;

import React, { Component } from "react";
import "./Hadith.css";

export default class Hadith extends Component {
  render() {
    return (
      <div className='Hadith'>
        <h1 className='Hadith-title text-center'>HADITH</h1>
        <hr />
        <p className='Hadith-reporter'>
          Abu Huraira reported: The Messenger of Allah, peace and blessings be
          upon him, said:
        </p>
        <p className='Hadith-text-arabic'>
          مَنْ دَعَا إِلَى هُدًى كَانَ لَهُ مِنَ الأَجْرِ مِثْلُ أُجُورِ مَنْ
          تَبِعَهُ لاَ يَنْقُصُ ذَلِكَ مِنْ أُجُورِهِمْ شَيْئًا وَمَنْ دَعَا
          إِلَى ضَلاَلَةٍ كَانَ عَلَيْهِ مِنَ الإِثْمِ مِثْلُ آثَامِ مَنْ
          تَبِعَهُ لاَ يَنْقُصُ ذَلِكَ مِنْ آثَامِهِمْ شَيْئًا ‏‏
        </p>
        <p className='Hadith-text-english'>
          Whoever calls to guidance will have a reward similar to those who
          follow him, without detracting from their rewards at all. Whoever
          calls to misguidance will have sin upon him similar to those who
          follow him, without detracting from their sins at all.{" "}
          <span>
            <strong>Source: Ṣaḥīḥ Muslim 2674, Grade: Sahih</strong>
          </span>
        </p>
      </div>
    );
  }
}

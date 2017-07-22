import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animateChild,
  stagger,
  query,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  selectedMember = null;
  faculty = [
    {
      name: 'Mr. John F. Banghart',
      class: 'avatar--square',
      title: 'Conductor',
      bio: `Originally from Central Pennsylvania, music has been a major part of
      John’s life since starting the baritone in fourth grade in Palmyra, PA. He
      completed his Bachelor of Science Degree in Music Education at Indiana
      University of Pennsylvania and his Masters work at Pennsylvania State
      University in State College, PA with additional studies at the University
      of Pennsylvania Wharton School of Business. He has had the pleasure of
      teaching and conducting all levels of young musicians in Liverpool, NY and
      Jersey Shore, PA. and has served as Interim Conductor for the Mid-Shore
      Community Band in Easton, MD. He remains in that organization as the
      Assistant Conductor and member of the tuba section and was a founding
      member of the Band. He has also served as Assistant Conductor of The
      Tidewater Singers and sang as a member in the bass section. Currently he
      also plays tuba with the Burnished Brass Quintet and is a freelance
      musician. He is active in the community as a Certified Piano Tuner and
      Technician. In addition to his musical endeavors locally, he has also had
      the honor of playing with the Baltimore Symphony Orchestra Academy under
      the direction of Maestra Marin Alsop for three seasons and studying tuba
      with Principal Tubist, David Fedderly.`,
      avatar: 'assets/avatars/JohnBanghart.jpg'
    }, {
      name: 'Ashley Weer',
      class: 'avatar--portrait',
      title: 'Flutes',
      bio: `Ashley Weer is originally from Goldsboro, MD and recently moved back
      to the areaafter working in the York-Lancaster areas for the past ten
      years. She graduated from Millersville University of Pennsylvania in 2009
      with a B.S. in music education, minor in psychology and is currently
      elementary music educator for the Laurel School District in Delaware.
      Throughout her career she has maintained a private instrumental studio,
      and under her collaborative guidance has led several competitive marching
      bands through successful seasons – most recently working with the North
      Caroline High School Band of Blue. Ms. Weer’s primary instrument is the
      flute and she is excited for the opportunity to work with everyone
      involved with the Summer Academy.`,
      avatar: 'assets/avatars/AshleyWeer.jpg'
    }, {
      name: 'Kim Mogensen',
      class: 'none',
      title: 'Clarinets',
      bio: `Kim Mogensen is currently the Band Director at Kent Island High
      School in Stevensville, MD after moving from central New Jersey to the
      Eastern Shore in 2015. She graduated from York College of Pennsylvania
      Magna Cum Laude with a Bachelor of Science in Music Education. At York
      College, she performed as the Principal clarinetist in the Wind Symphony
      and performed with the York College Community Orchestra. Ms. Mogensen was
      the Pequannock Middle School Band Director in 2014-2015 and also led the
      5th Beginner Band and instructed the Pequannock Township High School
      Marching Band. On the weekends, she is an active mellophone member of the
      Hawthorne Caballeros Drum and Bugle Corps from Hawthorne New Jersey. At
      Kent Island High School, Ms. Mogensen leads the Concert Band, Marching
      Band, Jazz Band, and instructs Music Theory, Percussion Ensemble, Music
      Appreciation, and Piano Musicianship. This summer, she will be continuing
      her education at Messiah College to earn a Master of Music in Wind
      Conducting.`,
      avatar: ''
    }, {
      name: 'Oren Vigo',
      class: 'avatar--square',
      title: 'Saxophones',
      bio: `Mr. Orren Vigo is currently a music educator at Colonel Richardson
      Middle School in Maryland, where he instructs both the general music
      classes and the instrumental ensembles, as well as co-directs the musical
      theater productions. These ensembles include the marching band, jazz band,
      concert band, and wind ensemble.
      A graduate of Indiana University of Pennsylvania, Mr. Vigo acquired a Bachelor's
      degree in Music Education with an Instrumental Education concentration. He took
      additional coursework in conducting and composing to supplement his degree, as
      well as being a member of the Robert E. Cook Honors College and an active
      brother in the national music fraternity Phi Mu Alpha Sinfonia - a group that
      works to further music in America and benefit education of music and the arts.
      Mr. Vigo has led and performed in many performing groups from chamber ensembles
      and barbershop quartets to marching bands and symphonic bands. In 2015, under
      the direction of internationally renowned composer David Holsinger, he performed
      with the national Sinfonia Winds ensemble. He is currently a member of the
      Mid-Shore Community Band and Mid-Shore Big Band, which perform all over the
      Eastern Shore of Maryland, and is also a member of the Eastern Shore Band
      Directors Association.`,
      avatar: 'assets/avatars/OrenVigo.jpg'
    }, {
      name: 'Chris Kefer',
      class: 'avatar--chris',
      title: 'Woodwind Doubler',
      bio: `Chris Kefer is from Lancaster, Pennsylvania, and now lives with his
      wife in Baltimore, Maryland. He graduated from West Chester University in
      2013 with a B.M. in Music Education and is currently working on his M.S.
      in Music Education at Towson University. He is in his fourth year as the
      band director at Matapeake Middle School in Queen Anne’s County Public
      Schools where he leads the concert band, symphonic band, marching band,
      and jazz band. Under his direction, the symphonic band has earned
      Excellent and Superior ratings at District Band Festival and Music in the
      Parks competitions. His students have earned Excellent and Superior
      ratings at both District and State Solo and Ensemble. Mr. Kefer’s primary
      instrument is the saxophone and he is looking forward to participating in
      the year’s Young Musicians Summer Academy`,
      avatar: 'assets/avatars/ChrisKefer.jpg'
    }, {
      name: 'Leon Frison',
      class: 'avatar--portrait',
      title: 'High Brass',
      bio: `Mr. Leon Frison is a native of Philadelphia, PA. He is currently the
      Director of Bands at Kent County Middle School in Chestertown, Maryland
      where his groups include, Level I and II Bands, Advanced Band, Festival
      Band, Jazz Band and a string group. Mr. Frison is a graduate of the
      Overbrook High School Music Magnet Program in Philadelphia where he played
      in the concert band, jazz band and orchestra. He received experience as a
      studio musician in his early teens and continued to establish himself as a
      writer, arranger and producer while in Philadelphia.
      Mr. Frison is a graduate of Philadelphia College of the Performing Arts (now
      known as University of the Arts) where he majored in Trumpet/Studio –Jazz
      Emphasis. There he composed for the jazz band and worked independently for a
      major gospel label. In addition to playing trumpet and arranging, Leon has
      worked as a keyboard player. He has played, recorded and/or arranged for Rev.
      James Cleveland, The Williams Brothers, Wagner Alumni Choir, Chuck Jackson,
      The Tymes, Jean Carne and has been sought to play for Ray Charles, The O’Jays,
      Bob Hope and Suzanne Summers.`,
      avatar: 'assets/avatars/LeonFrison.jpg'
    }, {
      name: 'Christopher Moore',
      class: 'avatar--landscape',
      title: 'Low Brass',
      bio: `A champion of contemporary music, Chris Moore has worked closely
      with such composers as Helmut Lachenmann, Vinko Globokar, Christian Wolff,
      Roger Reynolds, Lei Liang, and Pierluigi Billone. As a performer,
      educator, and teaching artist, Moore is driven by the belief that all
      music is accessible if presented in the right context and constantly seeks
      to broaden the sonic horizons of his audiences, his classes, and himself.
      He regularly performs with Callithumpian Consort and Sound Icon and is
      sought after as an avant-garde soloist.
      Outside of contemporary music, Chris keeps busy performing with such ensembles
      as Spokane Symphony, New World Symphony, Vermont Symphony Orchestra, Glens Falls
      Symphony Orchestra, and the Redline Brass Quintet. He is on faculty at the Longy
      School of Music of Bard College in the Teaching Artist Program and holds degrees
      from the University of Maryland, New England Conservatory, and Longy School of
      Music. No one succeeds without help and Chris is no different. He owes a debt of
      gratitude to Norman Bolter, Carol Viera, Stephanie Skor, and Stephen Drury for
      their long and profound support over the years.`,
      avatar: 'assets/avatars/ChristopherMoore.jpg'
    }, {
      name: 'Ali Rodrigues',
      class: 'avatar--portrait',
      title: 'Percussion',
      bio: `Ali Rodrigues is originally from Central Pennsylvania and now lives
      in Cambridge, MD. She earned a Bachelor of Music in Music Education (with
        a focus in percussion) from West Chester University in 2008 and a Master
        of Arts in Music Education from Mansfield University in 2015. Before
        moving to Maryland she spent time teaching competitive, championship,
        and award winning marching bands and indoor drumlines. She is currently
        the director of bands at Mace’s Lane Middle School in Dorchester County
        where she works with two concert bands, a symphonic band, and the
        marching band. When not teaching she can be found performing around the
        Mid-Shore, mainly with the Mid-Shore Community Band.`,
        avatar: 'assets/avatars/AliRodrigues.jpg'
    }, {
      name: 'Stephanie Skor',
      class: 'avatar--portrait',
      title: 'Strings',
      bio: `Since graduating from the New England Conservatory where she studied
      with Nicholas Kitchen, a founding member of the Borromeo String Quartet,
      violinist Stephanie Skor has enjoyed an eclectic performance career in New
      England. In demand for her ability to cross genres, Skor has performed
      with a variety of ensembles - from the critically acclaimed Boston-based
      chamber orchestra Discovery Ensemble, to a US tour with Jethro Tull. With
      a passion for 20 th century and contemporary music, Skor has premiered
      over 20 new works and is a member of the Callithumpian Consort, an
      ensemble dedicated to performing cutting-edge music from the last one
      hundred years. Skor is a member of the symphonic-electronic band Anthem
      Noise, and her work with that band has been featured on radio stations
      throughout Ireland. Skor enjoys performing in the many symphony orchestras
      in the Boston area, and has been fortunate to work with such orchestral
      artists as concertmaster Jorja Fleezanis, and conductors Michael Stern,
      Courtney Lewis, Osmo Vanska, and Larry Rachleff.`,
      avatar: 'assets/avatars/StephanieSkor.jpg'
    }
  ]

  selectMember(index) {
    this.selectedMember = this.faculty[index];
  }

  constructor() {
    this.selectedMember = this.faculty[0];
  }

  ngOnInit() {
  }

}

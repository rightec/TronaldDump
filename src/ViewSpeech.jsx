// 2) this.state.currentQuote
//    creare un componente che visualizzi, oltre che la citazione stessa, anche:
//    - lista di tag associati alla citazione (array "tags")
//    - data della citazione (appeared_at)
//    - link alla fonte della citazione (investigare nella chiave "_embedded",
//      prendete sempre il primo elemento dell'array "source")

/*  Descrizione del componente:
Oggetto ViewSpeech:
    - String quote: Citazione in forma di stringa
    - int id: identificativo della citazione (vedere se serve)
    - String array: array di tags collegati alla citazione
    - Date data: data della citazione
    - String: link della citazione

Il componente deve visualizzare tutte le info di cui sopra ad eccezione dell'id
La Citazione è disposta in un tag di tipo <p></p> per intero con font di dimensione
superiore agli altri elementi del componente (es: 28)
In un secondo blocco dispongo affiancati il blocco dei tag ed il blocco della data
Con font 14 per i tag e 18 per la data
Nel terzo blocco dispongo il link con dimensione font 18.

Non sono previsti cambiamenti di stato. Il componente o è montato o non è montato.
Il componente è montato solo in tag list mode
*/

import React from 'react'

/// let stringa = 'https://'
const ViewSpeech = (props) => {
  return (
    <div className='ViewSpeechMain'>
      <p className='ViewSpeechQuote'>
        {console.log('props.quote', props.quote)}
        {props.quote}
      </p>
      <div className='ViewSpeechCentral'>
        <aside className='ViewSpeechTags'>
          {console.log('props.tags', props.tags)}
          {props.tags}
        </aside>
        <aside className='ViewSpeechData'>
          {props.data}
        </aside>
      </div>
      <p className='ViewSpeechLink'>
        {console.log('props.links', props.link)}
        <a href={props.link}>
          Trump speech
        </a>
      </p>
    </div>
  )
}

export default ViewSpeech

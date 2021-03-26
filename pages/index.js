import Head from 'next/head'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Infocard from '../components/Infocard'
import Winner from '../components/Winner'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [dinoFacts, setDinoFacts] = useState([
    ["🕹", "There is an amazing Chrome dino game"],
    ["👴", "They are very old, almost as old as Ryan Swift"],
    ["7️⃣", "The old dinosaur ever found was at 7"]
  ])

  const [melonFacts, setMelonFacts] = useState([
    ["☠️", "Jack is allergic to them"],
    ["🏆", "They have a Local Hack Day subguild thing named after them"],
    ["🎉", "They are yeetful"]
  ])

  const [currentFact, setCurrentFact] = useState("")

  function handleChange(event) {
    setCurrentFact(event.target.value)
  }

  function addFact(type, fact, emoji) {
    if(type == "melon"){
      const tempFacts = [...melonFacts]
      tempFacts.push([emoji, fact])
      setMelonFacts(tempFacts)  
    } else {
      const tempFacts = [...dinoFacts]
      tempFacts.push([emoji, fact])
      setDinoFacts(tempFacts)  
    }

    setCurrentFact("")
    return true
  }
  
  return (
    <>
      <header className={styles.header}>
        <h1>Melons vs Dinos</h1>
      </header>
      <article>
        <Container className={styles.content}>
          <Winner winner={dinoFacts.length > melonFacts.length ? "dino" : dinoFacts.length == melonFacts.length ? "draw" : "melon"} />
          <Row>
            <Col xs={12} md={6}>
              <h2 className={styles.melonHeader}>Melons</h2>
              {
                melonFacts.map((fact) =>
                  <Infocard text={fact[1]} emoji={fact[0]} type="melon" />
                )
              }
            </Col>
            <Col xs={12} md={6}>
              <h2 className={styles.dinoHeader}>Dinos</h2>
              {
                dinoFacts.map((fact) =>
                  <Infocard text={fact[1]} emoji={fact[0]} type="dino" />
                )
              }
            </Col>
          </Row>
        </Container>
        <Container className={styles.content}>
          <h3>Add a Fact</h3>
          <Row>
            <Col xs={12} md={8}><input type="text" value={currentFact} onChange={handleChange} className={styles.form}/></Col>
            <Col xs={6} md={2}><button className={styles.button} onClick={() => {addFact("melon", currentFact, "💩")}}>Add to Melons</button></Col>
            <Col xs={6} md={2}><button className={styles.button} onClick={() => {addFact("dino", currentFact, "💩")}}>Add to Dinos</button></Col>
          </Row>
        </Container>
      </article>
    </>
  )
}

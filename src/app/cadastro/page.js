'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos/", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div className={styles.main}>
            
        <div className={styles.container}>
            <form className={styles.form} action='' onSubmit={cadastrar}>
                <h1 className={styles.um}>
                    Cadastrar
                </h1>

                <div className={styles.inputsingle}>
                <label>Informe nome do aluno:</label>
                <input className={styles.input}  nome="nome" type="text"
                    onChange={e => setNome(e.target.value)}></input><br/>
                    </div>

                    <div class={styles.inputsingle}>
                    <label>Informe o curso:</label>
                <input className={styles.input} nome="curso" type="text"
                    onChange={e => setCurso(e.target.value)}></input><br/>
                    </div>

                    <div class={styles.inputsingle}>
                    <label>Informe Nº de inscrição:</label>
                <input className={styles.input} nome="num_inscricao" type="number"
                    onChange={e => setNum_inscricao(e.target.value)}></input><br/>
                    </div>

                    <div className={styles.btn}><button className={styles.button} type='submit'>CADASTRAR</button></div>
                    <div className={styles.bt}><a className={styles.butto} href='/'>Voltar</a></div>
            </form>
        </div>
        </div>

    );

}
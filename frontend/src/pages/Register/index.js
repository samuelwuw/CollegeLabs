import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Register(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [workdate, setWorkdate] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [institution, setInstitution] = useState('');
    const [graduationlvl, setGraduationlvl] = useState('');
    const [graduationinstitution, setGraduationinstitution] = useState('');
    const [latteslink, setLatteslink] = useState('');

    const history = useHistory();

    //integração com o back-end
    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name, 
            password,
            email, 
            birthdate,
            workdate, 
            city, 
            uf,
            institution,
            graduationlvl,
            graduationinstitution,
            latteslink
        };
        
        try{
                //axios já envia em json
            const response = await api.post('researchers', data);

            alert(`Seu id de acesso: ${response.data.id}`);

            history.push('/');
        }catch(err){
            alert('Erro no cadastro, verifique se as informações são válidas. ');
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="College Labs"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem seus projetos</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color='#E02041' />
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Data de Nascimento"
                        value={birthdate}
                        onChange={e => setBirthdate(e.target.value)}
                    />
                    <input 
                        placeholder="Periodo de trabalho"
                        value={workdate}
                        onChange={e => setWorkdate(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                        <input 
                            placeholder="Intituição" 
                            style={{ width: 80 }} 
                            value={institution}
                            onChange={e => setInstitution(e.target.value)}
                        />
                        <input 
                            placeholder="Nivel de graduação" 
                            style={{ width: 80 }} 
                            value={graduationlvl}
                            onChange={e => setGraduationlvl(e.target.value)}
                        />
                        <input 
                            placeholder="Instituição da graduação " 
                            style={{ width: 80 }} 
                            value={graduationinstitution}
                            onChange={e => setGraduationinstitution(e.target.value)}
                        />
                        <input 
                            placeholder="Link Lattes" 
                            style={{ width: 80 }} 
                            value={latteslink}
                            onChange={e => setLatteslink(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
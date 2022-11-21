import { useEffect, useState } from "react";
import styles from '../styles/User.module.css'

function User({ nameApi }) {
  const [data, setData] = useState('');
  const [avatar, setAvatar] = useState('');
  const [repos, setRepos] = useState('');
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');
  const [blog, setBlog] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/users/${nameApi}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAvatar(data.avatar_url);
        setRepos(data.public_repos);
        setBio(data.bio);
        setName(data.name);
        setBlog(data.blog);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInterval(() => {
      setData(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(data);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h1>Dados do usuário</h1>
      <p>Data e hora atual: {data}</p>
      <img className={styles.imageAvatar} src={avatar} alt={`"avatar" ${name}`} />
      <p>Nome: {name}</p>
      <p>Repositórios públicos: {repos}</p>
      <spa>Bio: {bio}</spa>
      <p>Blog: {blog}</p>
    </section>
  )
}

export default User;
function The_Conjuring(props){
      const { name } = props; // Destructure the prop
      return (
        <div>
            <p style={{ whiteSpace: 'pre-wrap' }}>{name}</p>
        </div>
      );
    }

export default The_Conjuring;

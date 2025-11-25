function The_Autopsy_of_Jane_Doe(props){
      const { name } = props; // Destructure the prop
      return (
        <div>
            <p style={{ whiteSpace: 'pre-wrap' }}>{name}</p>
        </div>
      );
    }

export default The_Autopsy_of_Jane_Doe;

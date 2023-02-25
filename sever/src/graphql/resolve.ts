import User from '../models/Users'
import Publications from '../models/Publications'

type UserTypes ={
  _id:string
  name:string,
  lastName:string,
  username:string,
  email:string,
  password:string,
  birthdate:string,
  profile_picture:string,
  verified:boolean,
   connected:boolean
}


type PublicationsTypes = {
  _id:string
  id_user:string    
  description:string
  image:string
  comments:[]
}

type CommentTypes = {
  _id:string 
  id_public:string 
  text: string,
  author: string
}

type Deletecoments ={
  _id?:string
  id_public?:string
}

type DeleteCommentResult = {
  success: boolean;
};


export const resolvers = {
    //aqui en Query van las funciones de obtencion de datos de la DB
    Query: {
      hello: () => 'Hello World!',
      users: async ()=> await User.find(),
      user:async (_:any, {_id}:UserTypes )=> await User.findById(_id),
      publications: async ()=> await Publications.find(),
    },
   
     //aqui en Mutation van las funciones de crear actualizar y eliminar de la DB
    Mutation:{
      //creacion de usuario
      createUser: async (_:any, {
        name,
        lastName,
        username,
        email,
        password,
        birthdate,
        profile_picture,
        verified,
         connected }: UserTypes )=>{
          const user = new User({
            name,
            lastName,
            username,
            email,
            password,
            birthdate,
            profile_picture,
            verified,
             connected
          });
    
          const saveUser = await user.save();
    
          return saveUser;
      },
        //creacion de publicaciones 
      createPublication: async(_:any,{
        id_user,    
        description,
        image
      }: PublicationsTypes )=>{
        const user = await User.findById(id_user);
        
        if(!user) throw new Error('User no found');

         const newPublication = new Publications({
            id_user,
            description,
            image
         });

         const savePublication = await newPublication.save();
         
         return savePublication;
      },
       //añadir comentario a una publicacion
      createComents:async(_:any, {id_public, text, author}:CommentTypes)=>{
           try {
              const publication = await Publications.findById(id_public);
              const user = await User.findById(author);
              if(!publication || !user) throw new Error('publications or user not found');

              const newComents = {
                text,
                author
              }
              publication.comments?.push(newComents);

              await publication.save()
              
              return publication
              
           } catch (error) {
            console.error(error);
            throw new Error('Error adding comment');
           }
       },

        //eliminacion de comentarios ... nota analizar error de tipado
       deleteComents:async(_:any, {_id, id_public}: Deletecoments) =>{
         try {
          const publication = await Publications.findById(id_public);
          if(!publication) throw new Error('Publication not found');
           
          const updatedComments = publication.comments.filter((comment:any ) => comment._id !== _id);
           if(!updatedComments) throw new Error('comment no found')
          publication.comments = updatedComments;
          await publication.save();
          
          return publication          
        } catch (error) {
          console.error(error);
          throw new Error('Error deleting comment');
         }
           

       },
       //eliminacion de publicaciones
      deletPublication:async(_:any, {_id }: PublicationsTypes ) => {
             const publication =  await Publications.findByIdAndDelete(_id);
             
             if(!publication) throw new Error('Publication no found');

             return publication;
      }
    },
      //relacion entre usuario y sus publicaciones
      User:{
          publications:async (parent:PublicationsTypes)=>{
            const list = await Publications.find({id_user: parent._id});
            if(!list) throw new Error('publications no found');
            return list
          } 
        }
     //relacion de usuario y sus publicaciones
  };
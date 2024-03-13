
import { reactive, ref } from "vue";
import useAxios from "./useAxios"
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';
const useProductsCalls = () => {

  const router = useRouter()
    const data = ref<any[]>([])
    let detailData = reactive({author: "", category: "", category_name : "",comment_count:0,comments: [{content:"", user:"", time_stamp:""}],content: 
      "",createdAt: "",id: "",image: "", likes: 0,likes_n: [{user_id:""}],post_views: 0,publish_date: "",
      status:"",title: ""})
    
    const { axiosSimple } = useAxios()


  // const delBlog = async (id:string) => {
   
  //   try {
  //       const { data } = await axiosWithToken.delete(`api/blogs/${id}/`,
  //   );
  //   toast.success("The blog has been deleted.")
  //   setTimeout(() => {
  //     router.go(-1)
  //   }, 2000);
     
  //   } catch (error) {
  //   toast.error("The blog couldn't be deleted.")
  //   }
  // };

  // const updateBlog = async (values:any, id:any) => {
   
  //   try {
  //       const { data } = await axiosWithToken.put(`/api/blogs/${id}/`,values,
  //       );
  //       toast.success("The blog has been updated.")
      
  //   } catch (error) {
  //     toast.error("The blog couldn't be updated.")
    
  //   }
  // };


  // const sendBlog = async (values:any) => {

  //   try {
  //     const { data } = await axiosWithToken.post(`/api/blogs/`, values, 
  //     );
  //     toast.success("The blog has been created.")

  //     setTimeout(() => {
  //       router.push("/my-blogs")
  //     }, 2000);
     
      
  //     // console.log(data);
  //   } catch (error) {
  //     toast.error("The blog couldn't be created.")
  //   }
  // };

  const getProducts = async () => {

    try {
      const { data:products } = await axiosSimple(`products`
      );
     data.value=products
      // console.log(data);
    } catch (error:any) {
      console.log(error);
     
    }
  };


//   const getDetailBlog = async (id:string | string[]) => {
//     try {
//       const { data:blog } = await axiosWithToken(`api/blogs/${id}/`, 
//       );
// Object.assign(detailData, blog)
//     } catch (error) {
//       // console.log(error);
//     }
//   };




  return {getProducts, data };
};

export default useProductsCalls;



 import { motion } from "framer-motion";
 
 const Index = () => {
   return (
     <div className="flex min-h-screen items-center justify-center bg-background">
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="text-center px-6"
       >
         <h1 className="text-6xl md:text-7xl font-light tracking-tight text-foreground mb-4">
           IARA 2
         </h1>
         <div className="h-px w-32 mx-auto bg-primary/30" />
       </motion.div>
     </div>
   );
 };
 
 export default Index;

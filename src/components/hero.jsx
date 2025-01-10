import { Button } from "../ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/students.jpg"
        alt="Étudiants heureux"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenue sur ORIENTY
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            La plateforme dédiée à vous accompagner dans le choix de votre filière d'avenir.
          </p>
          <p className="text-lg md:text-xl mb-8">
            Laissez vous guider vers un{" "}
            <span className="text-green-400">avenir prometteur</span>.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 transition-colors"
            >
              Commencer maintenant
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


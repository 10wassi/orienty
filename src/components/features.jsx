import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Orientation Académique",
    description:
      "Découvrez les filières qui correspondent le mieux à vos aspirations et compétences",
  },
  {
    icon: Users,
    title: "Conseils Personnalisés",
    description:
      "Bénéficiez d'un accompagnement sur mesure pour faire les meilleurs choix",
  },
  {
    icon: BookOpen,
    title: "Ressources Éducatives",
    description:
      "Accédez à une bibliothèque de ressources pour préparer votre avenir",
  },
];

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group"
              >
                <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#002B5B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon && (
                      <feature.icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


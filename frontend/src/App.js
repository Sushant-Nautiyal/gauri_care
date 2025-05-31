import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSnowflake, 
  FaTools, 
  FaBolt, 
  FaPhone, 
  FaWhatsapp, 
  FaClock, 
  FaCheckCircle, 
  FaMapMarkerAlt,
  FaStar,
  FaShieldAlt,
  FaHome,
  FaBuilding
} from 'react-icons/fa';
import './App.css';

const App = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    {
      icon: <FaSnowflake className="text-4xl text-red-500" />,
      title: "Air Conditioning",
      description: "Complete AC installation, repair, and maintenance services for all brands",
      image: "https://images.pexels.com/photos/5691536/pexels-photo-5691536.jpeg",
      features: ["Installation", "Repair & Service", "Gas Refilling", "Annual Maintenance"]
    },
    {
      icon: <FaSnowflake className="text-4xl text-blue-500" />,
      title: "Refrigeration",
      description: "Expert refrigerator and commercial cooling system services",
      image: "https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg",
      features: ["Home Refrigerators", "Commercial Fridges", "Freezer Repair", "Cooling Systems"]
    },
    {
      icon: <FaBolt className="text-4xl text-yellow-500" />,
      title: "Inverters & Electrical",
      description: "Inverter installation, repair, and electrical equipment services",
      image: "https://images.pexels.com/photos/5691589/pexels-photo-5691589.jpeg",
      features: ["Inverter Repair", "Battery Service", "Electrical Faults", "Power Solutions"]
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919818662812?text=Hello, I need electrical equipment service', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+919818662812', '_self');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaTools className="text-red-500 text-2xl" />
            <h1 className="text-xl font-bold text-gray-800">Gauri Refrigeration Care</h1>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={handlePhoneClick}
              className="hidden md:flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone />
              <span>Call Now</span>
            </motion.button>
            <motion.button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/5463580/pexels-photo-5463580.jpeg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center bg-red-500/90 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <FaShieldAlt className="mr-2" />
              <span className="font-semibold">LG Certified Service Center</span>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            24/7 Emergency<br />
            <span className="text-red-400">AC & Refrigeration</span><br />
            Repair in Dehradun
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert installation, repair & maintenance for residential & commercial equipment
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-3 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xl" />
              <span>Get Instant Quote</span>
            </motion.button>
            <motion.button
              onClick={handlePhoneClick}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-3 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="text-xl" />
              <span>Emergency Call</span>
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <FaClock className="text-green-400" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-400" />
              <span>LG Certified Technicians</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-400" />
              <span>Serving All Dehradun</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical equipment solutions for homes and businesses in Dehradun
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold text-gray-800 ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mr-2 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">We Serve Everyone</h2>
            <p className="text-xl text-gray-600">Residential and commercial electrical equipment solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <FaHome className="text-4xl text-blue-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Residential Services</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Home AC installation & repair
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Refrigerator & freezer service
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Home inverter systems
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Annual maintenance contracts
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <FaBuilding className="text-4xl text-red-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Commercial Services</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Office & building HVAC systems
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Restaurant refrigeration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  Commercial inverter solutions
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-3" />
                  24/7 emergency support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Trusted expertise and certified service quality</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">LG Certified</h3>
              <p className="text-gray-600">Official LG service center with trained technicians</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">24/7 Service</h3>
              <p className="text-gray-600">Emergency repairs available round the clock</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled technicians with years of experience</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Local Service</h3>
              <p className="text-gray-600">Serving all areas of Dehradun, Uttarakhand</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Need Emergency Service?</h2>
            <p className="text-xl mb-8 text-red-100">
              Get immediate assistance for your electrical equipment issues
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-3 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp: 098186 62812</span>
              </motion.button>
              <motion.button
                onClick={handlePhoneClick}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-3 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="text-xl" />
                <span>Call Now</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaTools className="text-red-500 text-2xl" />
                <h3 className="text-xl font-bold">Gauri Refrigeration Care</h3>
              </div>
              <p className="text-gray-400 mb-4">
                LG Certified Service Center providing expert electrical equipment services in Dehradun.
              </p>
              <div className="flex space-x-4">
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 p-3 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaWhatsapp className="text-xl" />
                </motion.button>
                <motion.button
                  onClick={handlePhoneClick}
                  className="bg-red-500 hover:bg-red-600 p-3 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaPhone className="text-xl" />
                </motion.button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AC Installation & Repair</li>
                <li>Refrigeration Services</li>
                <li>Inverter Solutions</li>
                <li>Emergency Repairs</li>
                <li>Maintenance Contracts</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-red-500 mt-1" />
                  <span>Ekata enclave Lane no-5, Dalanwala, Ring Rd, Jogiwala, Dehradun, Uttarakhand 248001</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="text-green-500" />
                  <span>098186 62812</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaClock className="text-blue-500" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gauri Refrigeration Care. All rights reserved. | LG Certified Service Center</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
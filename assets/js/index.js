const propiedadesVenta = [
    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      banos: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      banos: 1,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: 3,
      banos: 3,
      costo: 4500,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Casa familiar en el suburbio',
      src: 'assets/img/studio.jpg',
      descripcion: 'Esta casa familiar se encuentra en una tranquila zona suburbana.',
      ubicacion: '101 Suburb Drive, Pleasantville, CA 12345',
      habitaciones: 5,
      banos: 3,
      costo: 3000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Céntrico, moderno y amplio apartamento',
      src: 'assets/img/amplio.jpg',
      descripcion: 'Este apartamento se encuentra cerca de todo en el centro de la ciudad.',
      ubicacion: '639 Main Street, Big Town, CA 25645',
      habitaciones: 4,
      banos: 3,
      costo: 6000,
      smoke: true,
      pets: true
    }
  ];
  
  const propiedadesAlquiler = [
    {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      banos: 2,
      costo: 2000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento luminoso con vista al mar',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
      ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      habitaciones: 3,
      banos: 3,
      costo: 2500,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: 2,
      banos: 2,
      costo: 2200,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Estudio en barrio bohemio',
      src: 'assets/img/studio.jpg',
      descripcion: 'Un estudio artístico en un barrio bohemio y vibrante.',
      ubicacion: '789 Bohemian St, Artsy Town, CA 67890',
      habitaciones: 1,
      banos: 1,
      costo: 1500,
      smoke: true,
      pets: false
    }
  ];
  
  function generarTarjetas(propiedades, idSeccion, limite) {
    const seccion = document.getElementById(idSeccion);
    const fila = seccion.querySelector('.row');
    fila.innerHTML = '';
  
    propiedades.slice(0, limite).forEach(propiedad => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';
  
      const card = document.createElement('div');
      card.className = 'card';
  
      const img = document.createElement('img');
      img.src = propiedad.src;
      img.className = 'card-img-top';
      img.alt = 'Imagen del departamento';
  
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
  
      const titulo = document.createElement('h5');
      titulo.className = 'card-title';
      titulo.textContent = propiedad.nombre;
  
      const descripcion = document.createElement('p');
      descripcion.className = 'card-text';
      descripcion.textContent = propiedad.descripcion;
  
      const ubicacion = document.createElement('p');
      ubicacion.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}`;
  
      const habitaciones = document.createElement('p');
      habitaciones.innerHTML = `<i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños`;
  
      const costo = document.createElement('p');
      costo.innerHTML = `<i class="fas fa-dollar-sign"></i> ${propiedad.costo}`;
  
      const fumar = document.createElement('p');
      fumar.className = propiedad.smoke ? 'text-success' : 'text-danger';
      fumar.innerHTML = propiedad.smoke ? '<i class="fas fa-smoking"></i> Permitido fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar';
  
      const mascotas = document.createElement('p');
      mascotas.className = propiedad.pets ? 'text-success' : 'text-danger';
      mascotas.innerHTML = propiedad.pets ? '<i class="fas fa-paw"></i> Mascotas permitidas' : '<i class="fas fa-ban"></i> No se permiten mascotas';
  
      cardBody.appendChild(titulo);
      cardBody.appendChild(descripcion);
      cardBody.appendChild(ubicacion);
      cardBody.appendChild(habitaciones);
      cardBody.appendChild(costo);
      cardBody.appendChild(fumar);
      cardBody.appendChild(mascotas);
  
      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
  
      fila.appendChild(col);
    });
  }
  
  // Generar tarjetas al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    generarTarjetas(propiedadesVenta, 'venta', 3);
    generarTarjetas(propiedadesAlquiler, 'alquiler', 3);
  });
  
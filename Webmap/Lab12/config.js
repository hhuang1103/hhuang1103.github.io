var config = {
    style:  'mapbox://styles/iamwfx/cjjx6bl926vgt2ss0l9dbpmxz',
    accessToken: 'pk.eyJ1IjoiaGg3NTgiLCJhIjoiY2xuMXo5bjQxMDJ5YzJrbGpvbXZudTVudSJ9.SzlG3WInkn7aWBEYPJkw0A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Coastal Flooding in New York City',
    subtitle: 'Assessing Risks to Vulnerable Housing',
    byline: 'By Hongtao',
    para1: 'Coastal flooding is a serious threat to New York City, and its impacts are expected to worsen with climate change. Sea levels are rising, and coastal storms are becoming more frequent and intense. As a result, coastal flooding can cause damage to property and infrastructure, disrupt transportation and communication, and pose a risk to human health and safety.',
    para2: 'Assessing risks to vulnerable housing is an important step in developing and implementing effective policies and programs to protect these communities. Vulnerable housing can be defined as housing that is at risk of damage or destruction from natural hazards, such as floods, earthquakes, or wildfires, or from human-caused hazards, such as pollution or neglect.',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'General Background',
            image: 'images/source.png',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.',
            location: {
                center: [-74.013,40.70271455297441],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'images/resource.png',
            description: 'The Red Hook Houses are two connected public housing complexes located in Red Hook, Brooklyn, New York City. Managed by the New York City Housing Authority (NYCHA), they comprise the largest housing development in Brooklyn.The map uses two data sources from the NYC Open Data portal: the Map of NYCHA Developments and the Sandy Inundation Zone. The map aims to illustrate the vulnerability of the NYCHA residents to coastal flooding and storm surge.',
            location: {
                center: [-74.004608, 40.675838],
                zoom: 18.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video:'images/902-1_902-2364-PD2_preview.mp4',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 14.84,
                pitch: 48,
                bearing: 142.44,
            },
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Why this area is white?',
            image: 'image/sandy1.png',
            description: 'Where is it?',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};
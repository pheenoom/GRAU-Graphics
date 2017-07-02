#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelViewProjectionMatrix;

uniform mat4 modelMatrixInverse;
uniform mat4 viewMatrixInverse;
uniform mat4 projectionMatrixInverse;
uniform mat4 modelViewMatrixInverse;
uniform mat4 modelViewProjectionMatrixInverse;

uniform mat3 normalMatrix;

uniform vec4 lightAmbient;  // similar a gl_LightSource[0].ambient
uniform vec4 lightDiffuse;  // similar a gl_LightSource[0].diffuse
uniform vec4 lightSpecular; // similar a gl_LightSource[0].specular
uniform vec4 lightPosition; // similar a gl_LightSource[0].position; en eye space
uniform vec4 matAmbient;    // similar a gl_FrontMaterial.ambient 
uniform vec4 matDiffuse;    // similar a gl_FrontMaterial.diffuse 
uniform vec4 matSpecular;   // similar a gl_FrontMaterial.specular
uniform float matShininess; // similar a gl_FrontMaterial.shininess

uniform vec3 boundingBoxMin; // cantonada minima de la capsa englobant 
uniform vec3 boundingBoxMax; // cantonada maxima de la capsa englobant

uniform vec2 mousePosition;  // coordenades del cursor (window space; origen a la cantonada inferior esquerra)

uniform vec3 red = vec3(1.0, 0.0, 0.0);
uniform vec3 blue = vec3(0.0, 0.0, 1.0);
uniform vec3 yellow = vec3(1.0, 1.0, 0.0);
uniform vec3 green = vec3(0.0, 1.0, 0.0);
uniform vec3 cian = vec3(0.0, 1.0, 1.0);

void main()
{
    float yMin = boundingBoxMin.y;
    float yMax = boundingBoxMax.y;
    float d = yMax - yMin;
    float x = (vertex.y - yMin)/d;
    
    if (x <= 0.25) {
        frontColor = vec4(mix(red, yellow, x * 4.0), 1.0);    
    }
    else if (x <= 0.50) {
        frontColor = vec4(mix(yellow, green, (x - 0.25) * 4.0), 1.0);    
    }
    else if (x <= 0.75) {
        frontColor = vec4(mix(green, cian, (x - 0.50) * 4.0), 1.0);
    }
    else {
        frontColor = vec4(mix(cian, blue, (x - 0.75) * 4.0), 1.0);   
    }

    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}

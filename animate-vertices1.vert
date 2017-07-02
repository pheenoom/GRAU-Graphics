#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;
uniform float time;
uniform float amplitude = 0.1;
uniform float freq = 1;
const float PI = 3.141592;

void main()
{
    float d = amplitude * sin(2.0 * PI * time * freq);
    vec3 nouVertex = vertex + d * normal;

    frontColor = vec4(normalize(normalMatrix * normal).z);
    vtexCoord = texCoord;
    
    gl_Position = modelViewProjectionMatrix * vec4(nouVertex, 1.0);
}

#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float time;
uniform float speed = 0.1;
uniform sampler2D colorMap;

void main()
{
    vec2 novaTextura = vtexCoord + (speed * time);
    fragColor = frontColor * texture(colorMap, novaTextura);
}
